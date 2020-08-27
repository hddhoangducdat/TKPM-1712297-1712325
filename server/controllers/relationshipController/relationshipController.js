const userRelationshipModel = require("../../models/userRelationshipModel");
const chatBoxModel = require("../../models/chatModel");
const userModel = require("../../models/userModel");

exports.addFriend = async (req, res) => {
  const userId1 =
    req.body.host > req.body.toUser ? req.body.toUser : req.body.host;
  const userId2 = req.body.host === userId1 ? req.body.toUser : req.body.host;

  const relationship = new userRelationshipModel({
    userId1: userId1,
    userId2: userId2,
    type: req.body.host,
  }); // host send request, wait accept

  await relationship.save();

  // mai lam tiep
  res.send(relationship);
};

exports.getRequestFriend = async (req, res) => {
  const userId1 =
    req.params.id1 > req.params.id2 ? req.params.id2 : req.params.id1;
  const userId2 = req.params.id1 === userId1 ? req.params.id2 : req.params.id1;

  // ID 1: host, Id2: another

  const rs = await userRelationshipModel.findOne({
    userId1: userId1,
    userId2: userId2,
  });

  // TH nay là mình gửi lời mời cho người khác: có thể cancle
  if (rs)
    res.send(
      rs.type === req.params.id1
        ? "pending"
        : rs.type === req.params.id2
        ? "accept"
        : rs.type === "friend"
        ? "friend"
        : "none"
    );
  else res.send("none");
};

exports.acceptFriend = async (req, res) => {
  const userId1 = req.body.id1 > req.body.id2 ? req.body.id2 : req.body.id1;
  const userId2 = req.body.id1 < req.body.id2 ? req.body.id2 : req.body.id1;

  await userRelationshipModel.findOneAndUpdate(
    {
      userId1,
      userId2,
    },
    { type: "friend" },
    { new: true }
  );

  const user1 = await userModel.findById(userId1);
  const user2 = await userModel.findById(userId2);

  const chatDialog = new chatBoxModel({
    message: [],
    member: [userId1, userId2],
    isGroup: false,
  });

  user1.chatBox = [
    {
      id: chatDialog._id,
      name: user2.userName,
      avatar: user2.avatar,
      noti: `${user1.userName} is your friend, message him now`,
      seen: false,
    },
    ...user1.chatBox,
  ];

  user2.chatBox = [
    {
      id: chatDialog._id,
      name: user1.userName,
      avatar: user1.avatar,
      noti: `${user2.userName} is your friend, message him now`,
      seen: false,
    },
    ...user2.chatBox,
  ];

  await chatDialog.save();
  await user1.save();
  await user2.save();
  res.send({
    user1: {
      id: chatDialog._id,
      name: user2.userName,
      avatar: user2.avatar,
      noti: `${user1.userName} is your friend, message him now`,
      seen: false,
    },
    user2: {
      id: chatDialog._id,
      name: user1.userName,
      avatar: user1.avatar,
      noti: `${user2.userName} is your friend, message him now`,
      seen: false,
    },
  });
};

exports.cancleRequest = async (req, res) => {
  // req.body.request

  const userId1 =
    req.params.id2 > req.params.id1 ? req.params.id1 : req.params.id2;
  const userId2 =
    req.params.id2 < req.params.id1 ? req.params.id1 : req.params.id2;

  // const resquest = req.body.request;

  await userRelationshipModel
    .findOneAndDelete({
      userId1,
      userId2,
    })
    .exec()
    .then((docs) => {
      res.send(docs);
    })
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

exports.getFriend = async (req, res) => {
  const friend1 = await userRelationshipModel.find({
    userId1: req.params._id,
    type: "friend",
  });
  const friend2 = await userRelationshipModel.find({
    userId2: req.params._id,
    type: "friend",
  });

  let friend = [];

  await Promise.all(
    friend1.map(async (f) => {
      await userModel
        .findById(f.userId2, "userName avatar")
        .then((result) => {
          console.log(result);

          friend = [...friend, result];
        })
        .catch((err) => {});
    })
  );

  await Promise.all(
    friend2.map(async (f) => {
      await userModel
        .findById(f.userId1, "userName avatar")
        .then((result) => {
          console.log(result);
          friend = [...friend, result];
        })
        .catch((err) => {});
    })
  );

  console.log(friend);

  res.send(
    friend.map((f) => {
      return f._doc;
    })
  );
};
