const chatBoxModel = require("../model/chatBoxModel");
const userModel = require("../model/userModel");
const messageModel = require("../model/messageModel");

exports.getChatDialog = async (req, res) => {
  await chatBoxModel.findById(req.params._id, function (err, docs) {
    if (err) return res.status(404).send(err);

    console.log("ok");
    return res.json(docs);
  });
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
    },
  ];

  user2.chatBox = [
    ...user2.chatBox,
    {
      id: chatDialog._id,
      name: user1.userName,
      avatar: user1.avatar,
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

exports.saveMessage = async (req, res) => {
  const chatModel = await chatBoxModel.findById(req.params._id);

  //console.log(chatModel.message.length);
  const arrMessageNew = [...chatModel.message, req.body.messageId];
  await chatBoxModel.findOneAndUpdate(
    { _id: req.params._id },
    { message: arrMessageNew },
    { new: true },
    function (err, docs) {
      if (err) return res.status(400).json("Error: " + err);
      if (docs) return res.json(docs);
      return res.status(404).json("Error : Not Found");
    }
  );
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
