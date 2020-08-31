const groupUserModel = require("../../models/groupUserModel");
const chatBoxModel = require("../../models/chatModel");
const statusModel = require("../../models/statusModel");
const userModel = require("../../models/userModel");
const fileModel = require("../../models/fileModel");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");
const OAuth2Data = require("../../../credentials.json");
const groupRoute = require("../../routers/groupRoute/groupRoute");

const { client_secret, client_id, redirect_uris } = OAuth2Data.installed;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);
const avatarDefault =
  "https://www.facebook.com/images/groups/Null-Header-1640x500-2x.png";

// sourceFolder in GG drive
const targetFolderId = "12OVzJ1Jxr0p5SUNuYgCxNu4sC6hqelsK";
const SCOPES = ["https://www.googleapis.com/auth/drive"];
const TOKEN_PATH = "token.json";

fs.readFile(TOKEN_PATH, (err, token) => {
  if (err) return new Error("Error config ggApi");
  oAuth2Client.setCredentials(JSON.parse(token));
});

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const filePath = path.join(__dirname, "..", "..", "..", "/");
    cb(null, filePath);
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".")[1];
    const filename = file.originalname.split(".")[0];
    cb(null, `group-${filename}-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.userUploadFile = upload.single("imageCover");

const filterObj = (obj, ...allowedFileds) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFileds.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
};

const createChatDialog = async (req, filePath, id) => {
  const member =
    req.body.member instanceof Array ? req.body.member : [req.body.member];
  const chatDialog = new chatBoxModel({
    message: [],
    member,
    name: req.body.groupName,
    isGroup: true,
  });

  await chatDialog.save();

  await Promise.all(
    member.map(async (m) => {
      const user = await userModel.findById(m);
      user.chatBox = [
        {
          id: chatDialog._id,
          name: req.body.groupName,
          avatar: filePath,
          groupId: id,
          seen: true,
        },
        ...user.chatBox,
      ];
      await user.save();
    })
  );

  return chatDialog._id;
};

exports.createGroupUser = async (req, res, next) => {
  const member =
    req.body.member instanceof Array ? req.body.member : [req.body.member];
  const filteredBody = filterObj(req.body, "groupName", "admin", "member");
  if (req.file !== undefined) {
    //Upload image
    next();
  } else {
    const newModel = new groupUserModel(filteredBody);

    const chatId = createChatDialog(req, avatarDefault, newModel._id);
    await chatId.then((docs) => {
      newModel.data = {
        member,
        chatGroup: docs,
      };

      res.json({
        id: docs,
        name: req.body.groupName,
        avatar: avatarDefault,
        groupId: newModel._id,
        member: member.length,
        seen: true,
      });
    });

    await newModel.save();
  }
};

exports.uploadImageCover = async (req, res) => {
  const member =
    req.body.member instanceof Array ? req.body.member : [req.body.member];
  const drive = google.drive({
    version: "v3",
    auth: oAuth2Client,
  });
  const filemetadata = {
    name: req.file.filename,
    parents: [targetFolderId],
  };
  const media = {
    mimeType: req.file.mimetype,
    body: fs.createReadStream(req.file.path),
  };
  await drive.files.create(
    { resource: filemetadata, media: media, fields: "id" },
    async (err, file) => {
      if (err) throw err;
      //delete the file image
      fs.unlinkSync(req.file.path);
      // update
      const filteredBody = filterObj(req.body, "groupName", "admin", "member");
      filteredBody.avatar = `https://drive.google.com/uc?id=${file.data.id}&export=download`;
      const newModel = new groupUserModel(filteredBody);

      const chatId = createChatDialog(req, filteredBody.avatar, newModel._id);
      await chatId.then((docs) => {
        newModel.data = {
          member,
          chatGroup: docs,
        };

        res.json({
          id: docs,
          name: req.body.groupName,
          avatar: filteredBody.avatar,
          groupId: newModel._id,
          member: member.length,
        });
      });

      await newModel.save();
    }
  );
};

exports.addMember = async (req, res) => {
  const host = req.body.host;
  const newMember = req.body.member;

  const groupUser = await groupUserModel.findById(req.params._id);

  if (groupUser.admin === host) {
    // Add member to group
    groupUser.data.member = [...groupUser.data.member, newMember];
    groupUser.markModified("data.member");

    await groupUser.save();

    //Create chatBox in member

    const newGroupMember = await userModel.findById(req.body.member);

    newGroupMember.chatBox = [
      ...newGroupMember.chatBox,
      {
        id: groupUser.data.chatGroup,
        name: groupUser.groupName,
        avatar: groupUser.avatar,
      },
    ];

    newGroupMember.markModified("chatBox");
    //Add status group to member
    await Promise.all(
      groupUser.data.status.map((e) => {
        return "group-" + groupUser._id + "-" + e;
      })
    )
      .then((status) => {
        // tra ve tat ca stt của group
        newGroupMember.status = [status, ...newGroupMember.status];
        newGroupMember.markModified(status);
      })
      .catch((err) => res.status(400).json(err));

    await newGroupMember.save();
    //add member to chatGroup
    const chatGroupDialog = await chatBoxModel.findById(
      groupUser.data.chatGroup
    );

    chatGroupDialog.member = [...chatGroupDialog.member, newGroupMember._id];
    chatGroupDialog.markModified("member");
    await chatGroupDialog.save();
    res.json(groupUser);
  } else {
    // khong phai admin
    res.status(400).json("");
  }
};

exports.getGroup = async (req, res) => {
  const result = await groupUserModel.findById(req.params._id);
  res.send(result);
};

exports.getAllFile = async (req, res) => {
  console.log(req.params._id);
  await groupUserModel.findById(req.params._id, async function (err, doc) {
    if (err) return res.status(400).json("Error: " + err);
    if (doc) {
      await Promise.all(
        doc.data.files.map(async (e) => {
          const file = await fileModel.findById(e);
          return file;
        })
      )
        .then((files) => {
          // console.log(files);
          //return All file of status in Group
          res.json(files);
        })
        .catch((err) => {
          res.status(400).json("Error: " + err);
        });
    }
  });
};

exports.addMember = async (req, res) => {
  const groupUser = await groupUserModel.findById(req.body.groupId);

  // Add member to group
  groupUser.data.member = [...groupUser.data.member, req.params._id];
  groupUser.markModified("data.member");

  await groupUser.save();

  //Create chatBox in member

  const newGroupMember = await userModel.findById(req.params._id);

  newGroupMember.chatBox = [
    {
      id: groupUser.data.chatGroup,
      name: groupUser.groupName,
      avatar: groupUser.avatar,
      seen: false,
      groupId: req.body.groupId,
    },
    ...newGroupMember.chatBox,
  ];

  newGroupMember.markModified("chatBox");
  //Add status group to member

  groupUser.data.status.map((e) => {
    newGroupMember.status = [
      "group-" + req.body.groupId + "-" + e,
      ...newGroupMember.status,
    ];
    newGroupMember.markModified("status");
  });

  await newGroupMember.save();
  //add member to chatGroup
  const chatGroupDialog = await chatBoxModel.findById(groupUser.data.chatGroup);

  chatGroupDialog.member = [...chatGroupDialog.member, newGroupMember._id];
  chatGroupDialog.markModified("member");
  await chatGroupDialog.save();
  res.json({
    id: chatGroupDialog._id,
    name: groupUser.groupName,
    avatar: groupUser.avatar,
    groupId: groupUser._id,
    member: 2,
    seen: false,
  });
};
