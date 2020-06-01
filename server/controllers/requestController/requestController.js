const requestModel = require("../../models/requestModel");
const userModel = require("../../models/userModel");
const chatModel = require("../../models/chatModel");
const _ = require("lodash");

exports.addFriend = async (req, res) => {
  let request = new requestModel({
    from: req.body.from,
    to: req.params.id,
  });
  await request.save();
  res.send(request);
};

exports.acceptFriend = async (req, res) => {
  let result = await requestModel.findByIdAndDelete(req.params.id);
  let user1 = await userModel.findById(req.body.user1);
  let user2 = await userModel.findById(req.body.user2);

  user1.data.friend = [...user1.data.friend, user2._id];
  user2.data.friend = [...user2.data.friend, user1._id];

  const chatDialog = new chatModel({
    message: [],
  });

  user1.data.chatBox = [
    ...user1.data.chatBox,
    {
      id: chatDialog._id,
      name: user2.data.fullName,
      avatar: user2.data.avatar,
      member: [user1._id, user2._id],
    },
  ];
  user2.data.chatBox = [
    ...user2.data.chatBox,
    {
      id: chatDialog._id,
      name: user1.data.fullName,
      avatar: user1.data.avatar,
      member: [user1._id, user2._id],
    },
  ];

  await chatDialog.save();
  await user1.save();
  await user2.save();
  await result.save();

  res.send({
    chatDialog,
    user1,
    user2,
  });
};

exports.cancleFriend = async (req, res) => {
  let result = await requestModel.findByIdAndDelete(req.params.id);
  await result.save();
};

exports.unFriend = async (req, res) => {
  let user1 = await userModel.findById(req.body.user1);
  let user2 = await userModel.findById(req.body.user2);

  _.remove(user1.data.friend, (f) => {
    return f == req.body.user2;
  });
  _.remove(user2.data.friend, (f) => {
    return f == req.body.user1;
  });

  _.remove(user1.data.chatBox, (c) => {
    return (
      length(c.member) == 2 &&
      c.member.includes(req.body.user1) &&
      c.member.includes(req.body.user2)
    );
  });

  _.remove(user2.data.chatBox, (c) => {
    return (
      length(c.member) == 2 &&
      c.member.includes(req.body.user1) &&
      c.member.includes(req.body.user2)
    );
  });

  user1.markModified("data.friend");
  user2.markModified("data.friend");
  user1.markModified("data.chatBox");
  user2.markModified("data.chatBox");
  await user1.save();
  await user2.save();
};

exports.getRequest = async (req, res) => {
  let result1 = await requestModel.findOne({
    from: req.params.id1,
    to: req.params.id2,
  });
  let result2 = await requestModel.findOne({
    from: req.params.id2,
    to: req.params.id1,
  });
  if (result1) {
    res.send(result1);
  } else if (result2) {
    res.send(result2);
  } else {
    res.send(false);
  }
};
