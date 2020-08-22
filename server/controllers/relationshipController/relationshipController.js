const userRelationshipModel = require("../../models/userRelationshipModel");
const chatBoxModel = require("../../models/chatModel");
const userModel = require("../../models/userModel");
const notiModel = require("../../models/notiModel");
exports.addFriend = async (req, res) => {
  const userId1 =
    req.body.host > req.body.toUser ? req.body.toUser : req.body.host;
  const userId2 = req.body.host === userId1 ? req.body.toUser : req.body.host;

  console.log(userId1, userId2);

  const relationship = new userRelationshipModel({
    userId1: userId1,
    userId2: userId2,
    type: req.body.host,
  }); // host send request, wait accept

  await relationship.save();

  res.send(relationship);
};

exports.getRequestFriend = async (req, res) => {
  const userId1 =
    req.params.id1 > req.params.id2 ? req.params.id2 : req.params.id1;
  const userId2 = req.params.id1 === userId1 ? req.params.id2 : req.params.id1;

  // ID 1: host, Id2: another

  const rs1 = await userRelationshipModel.findOne({
    userId1: userId1,
    userId2: userId2,
    type: req.params.id1,
  });

  const rs2 = await userRelationshipModel.findOne({
    userId1: userId1,
    userId2: userId2,
    type: req.params.id2,
  });

  const rs3 = await userRelationshipModel.findOne({
    userId1: userId1,
    userId2: userId2,
    type: "friend",
  });

  if (rs1) {
    // TH nay là mình gửi lời mời cho người khác: có thể cancle
    res.send(rs1);
  } else if (rs2) {
    // TH này là người khác gửi cho mình: có thể từ chối lời mời
    res.send(rs2);
  } else if (rs3) {
    // TH đã là bạn
    res.send(rs3);
  } else {
    // TH chưa là có mối quan hệ
    res.send("");
  }
};

exports.acceptFriend = async (req, res) => {
  const userId1 = req.body.id1 > req.body.id2 ? req.body.id2 : req.body.id1;
  const userId2 = req.body.id1 === userId1 ? req.body.id2 : req.body.id1;

  const updateRelationship = {
    userId1: userId1,
    userId2: userId2,
    type: "friend",
  };

  const chatDialog = new chatBoxModel({
    message: [],
    member: [userId1, userId2],
    isGroup: false,
  });

  const user1 = await userModel.findById(userId1);
  const user2 = await userModel.findById(userId2);

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
  await user2.save();

  await userRelationshipModel.findOneAndUpdate(
    { _id: req.params._id },
    updateRelationship,
    { new: true },
    function (err, data) {
      if (err) return res.status(400).send("Error while updating");
      if (data) return res.send(data);
      return res.status(404).send("");
    }
  );
};

exports.cancleRequest = async (req, res) => {
  // req.body.request

  console.log(req.params._id);

  // const resquest = req.body.request;

  await userRelationshipModel
    .findByIdAndDelete(req.params._id)
    .exec()
    .then((docs) => res.send(docs))
    .catch((e) => res.status(403).send(e));
};

exports.unfriend = async (req, res) => {
  // req.body.id : ID của user
  // req.params._id: ID của friend muốn xoá
  const userId1 = req.body.id1 > req.body.id2 ? req.body.id2 : req.body.id1;
  const userId2 = req.body.id1 === userId1 ? req.body.id2 : req.body.id1;

  const userRelationship = {
    userId1: userId1,
    userId2: userId2,
    type: "friend",
  };

  await userRelationshipModel.findOneAndDelete(userRelationship, function (
    err,
    data
  ) {
    if (err) return res.status(400).send("Error when deleting");
    if (data) res.send(data);
    return res.status(404).send("");
  });
};
