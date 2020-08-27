const chatBoxModel = require("../../models/chatModel");
const userModel = require("../../models/userModel");

exports.messageNoti = async (req, res) => {
  let user = await userModel.findById(req.params._id);
  user.chatBox = user.chatBox.map((c) => {
    if (c.id === req.body.id) {
      c.noti = req.body.noti;
      c.seen = false;
      return c;
    } else return c;
  });
  await user.save();
};

exports.messageSelfNoti = async (req, res) => {
  let user = await userModel.findById(req.params._id);
  user.chatBox = user.chatBox.map((c) => {
    if (c.id === req.body.id) {
      c.noti = req.body.noti;
      c.seen = true;
      return c;
    } else return c;
  });
  await user.save();
};

exports.saveMessge = async (req, res) => {
  let chatBox = await chatBoxModel.findById(req.body.id);
  chatBox.message = [...chatBox.message, req.body.message];
  await chatBox.save();
};

exports.seenMessage = async (req, res) => {
  let user = await userModel.findById(req.params._id);
  user.chatBox = user.chatBox.map((c) => {
    if (c.id === req.body.id) {
      c.seen = true;
      return c;
    } else return c;
  });

  await user.save();
};

exports.getChatDialog = async (req, res) => {
  await chatBoxModel.findById(req.params._id, function (err, docs) {
    if (err) return res.status(404).send(err);

    console.log("ok");
    return res.json(docs);
  });
};

// chua xem
exports.newNoti = async (req, res) => {
  const user = await userModel.findById(req.body.userId);
  //filter all chatBox but not include chatBoxChange
  const chatBoxCur = user.chatBox.filter((e) => e.id !== req.params._id);
  //console.log(chatBoxCur);
  // find Object chatBox change
  const chatBoxChange = user.chatBox.filter((e) => e.id === req.params._id)[0];
  const newChatBox = {
    id: chatBoxChange.id,
    name: chatBoxChange.name,
    avatar: chatBoxChange.avatar,
    noti: req.body.noti, // gui noti moi nhat
    seen: false,
  };
  user.chatBox = [...chatBoxCur, newChatBox];
  await user.save();
  res.json("");
};

//da xem => Click vao chatDialog
exports.seenNoti = async (req, res) => {
  const user = await userModel.findById(req.body.userId);
  //console.log(user);
  //filter all chatBox but not include chatBoxChange
  const chatBoxCur = user.chatBox.filter((e) => e.id !== req.params._id);
  //console.log(chatBoxCur);
  // find Object chatBox change
  const chatBoxChange = user.chatBox.filter((e) => e.id === req.params._id)[0];
  const newChatBox = {
    id: chatBoxChange.id,
    name: chatBoxChange.name,
    avatar: chatBoxChange.avatar,
    noti: chatBoxChange.noti,
    seen: true,
  };

  user.chatBox = [...chatBoxCur, newChatBox];
  await user
    .save()
    .then((docs) => res.json(docs))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.createChatDialog = async (req, res) => {
  const user1 = await userModel.findById(req.body.id1);
  const user2 = await userModel.findById(req.body.id2);

  const chatDialog = new chatBoxModel({
    message: [],
    member: [req.body.id1, req.body.id2],
    isGroup: false,
  });

  user1.chatBox = [
    ...user1.chatBox,
    {
      id: chatDialog._id,
      name: user2.userName,
      avatar: user2.avatar,
      seen: false,
      noti: "",
    },
  ];

  user2.chatBox = [
    ...user2.chatBox,
    {
      id: chatDialog._id,
      name: user1.userName,
      avatar: user1.avatar,
      seen: false,
      noti: "",
    },
  ];

  await chatDialog.save();
  await user1.save();
  await user1.save();

  res.json(chatDialog);
};

exports.checkIsExisted = async (req, res) => {
  const userId1 =
    req.params.id1 > req.params.id2 ? req.params.id2 : req.params.id1;
  const userId2 = req.params.id1 === userId1 ? req.params.id2 : req.params.id1;
  console.log(userId1, userId2);

  await chatBoxModel
    .find({ member: { $all: [userId1, userId2] } })
    .then((docs) => {
      if (!Object.keys(docs).length) {
        console.log("not found");
        res.status(400).json("Not Existed!");
      } else {
        res.json(docs);
      }
    })
    .catch((err) => res.status(400).json("Error : " + err));
};

exports.createChatGroupDialog = async (req, res) => {
  const host = await userModel.findById(req.body.arrUserId[0]);

  const chatDialog = new chatBoxModel({
    message: [],
    member: req.body.arrUserId,
    name: req.body.groupName,
    avatar: host.avatar,
    isGroup: true,
  });

  req.body.arrUserId.forEach(async (element) => {
    const user = await userModel.findById(element);

    user.chatBox = [
      ...user.chatBox,
      {
        id: chatDialog._id,
      },
    ];

    await user.save();
  });

  await chatDialog.save();

  res.json(chatDialog);
};
