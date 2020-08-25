const userModel = require("../../models/userModel");
const relationModel = require("../../models/userRelationshipModel");
const statusModel = require("../../models/statusModel");
const groupModel = require("../../models/groupUserModel");

exports.createStatusGroup = async (req, res) => {
  const user = await userModel.findById(req.params._id);

  const status = new statusModel({
    text: req.body.text,
    avatar: user.avatar,
    userName: user.userName,
    from: user._id,
    image: req.body.url,
    group: {
      id: req.body.group.id,
      name: req.body.group.name,
    },
    like: [],
    comment: [],
  });

  const group = await groupModel.findOne({
    _id: req.body.group.groupId,
  });

  group.data.member.forEach(async (member) => {
    const userMember = await userModel.findById(member);
    userMember.status = [
      "group-" + req.body.group.groupId + "-" + status._id,
      ...userMember.status,
    ];
    await userMember.save();
  });

  await status.save();
  res.send(status);
};

exports.createStatus = async (req, res) => {
  const user = await userModel.findById(req.params._id);
  const friend1 = await relationModel.find({
    userId1: user._id,
    type: "friend",
  });
  const friend2 = await relationModel.find({
    userId2: user._id,
    type: "friend",
  });

  const status = new statusModel({
    text: req.body.text,
    avatar: user.avatar,
    userName: user.userName,
    from: user._id,
    image: req.body.url,
    like: [],
    comment: [],
  });
  friend1.forEach(async (f) => {
    const friend = await userModel.findById(f.userId2);
    friend.status = [status._id, ...friend.status];
    await friend.save();
  });
  friend2.forEach(async (f) => {
    const friend = await userModel.findById(f.userId1);
    friend.status = [status._id, ...friend.status];
    await friend.save();
  });

  user.status = [status._id, ...user.status];
  await user.save();
  await status.save();

  res.send(status);
};

exports.getStatus = async (req, res) => {
  let status = await statusModel.findById(req.params._id);
  res.send(status);
};
