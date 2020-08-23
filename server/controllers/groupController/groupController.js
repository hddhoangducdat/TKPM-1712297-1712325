const groupUserModel = require("../../models/groupUserModel");
const chatBoxModel = require("../../models/chatModel");
const userModel = require("../../models/userModel");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");
const OAuth2Data = require("../../../credentials.json");
const { Types } = require("mongoose");
const groupRoute = require("../../routers/groupRoute/groupRoute");
const { resolve } = require("path");
const { chat } = require("googleapis/build/src/apis/chat");
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
    const filePath = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "/client/public/files"
    );
    cb(null, filePath);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
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

const createChatDialog = async (req, filePath) => {
  const chatDialog = new chatBoxModel({
    message: [],
    member: [req.body.admin],
    name: req.body.groupName,
    isGroup: true,
  });

  await chatDialog.save();

  const userAdmin = await userModel.findById(req.body.admin);

  userAdmin.chatBox = [
    ...userAdmin.chatBox,
    {
      id: chatDialog._id,
      name: req.body.groupName,
      avatar: filePath,
    },
  ];

  await userAdmin.save();

  return chatDialog._id;
};

exports.createGroupUser = async (req, res, next) => {
  const filteredBody = filterObj(req.body, "groupName", "admin");
  if (req.file !== undefined) {
    //Upload image
    console.log(req.file.filename);
    next();
  } else {
    const chatId = createChatDialog(req, avatarDefault);
    await chatId.then((docs) => {
      filteredBody.data = {
        member: [req.body.admin],
        chatGroup: docs,
      };
    });

    console.log(filteredBody);

    const newModel = new groupUserModel(filteredBody);
    await newModel
      .save()
      .then((docs) => res.json(docs))
      .catch((err) => res.status(400).json("Error: " + err));
  }
};

exports.uploadImageCover = async (req, res) => {
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
      const filteredBody = filterObj(req.body, "groupName", "admin");
      filteredBody.avatar = `https://drive.google.com/uc?id=${file.data.id}&export=download`;

      const chatId = createChatDialog(req, filteredBody.avatar);
      await chatId.then((docs) => {
        filteredBody.data = {
          member: [req.body.admin],
          chatGroup: docs,
        };
      });

      console.log(filteredBody);

      const newModel = new groupUserModel(filteredBody);
      await newModel
        .save()
        .then((docs) => res.json(docs))
        .catch((err) => res.status(400).json("Error: " + err));
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
