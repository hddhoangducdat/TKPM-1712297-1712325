const userModel = require("../../models/userModel");
const relationModel = require("../../models/userRelationshipModel");
const statusModel = require("../../models/statusModel");
const groupModel = require("../../models/groupUserModel");

exports.likeStatus = async (req, res) => {
  const user = await userModel.findById(req.params._id);
  const status = await statusModel.findById(req.body.id);
  user.status[req.body.index].like = true;
  status.like = [req.params._id, ...status.like];
  user.markModified("status");
  await status.save();
  await user.save();
};

exports.commentStatus = async (req, res) => {
  const user = await userModel.findById(req.params._id);
  const status = await statusModel.findById(req.body.id);
  status.comment = [
    {
      userName: user.userName,
      avatar: user.avatar,
      _id: user._id,
      text: req.body.text,
    },
    ...status.comment,
  ];
  await status.save();
};

exports.unlikeStatus = async (req, res) => {
  const user = await userModel.findById(req.params._id);
  const status = await statusModel.findById(req.body.id);
  user.status[req.body.index].like = false;
  status.like = status.like.filter((l) => {
    if (l === req.params._id) return false;
    return true;
  });
  user.markModified("status");
  await status.save();
  await user.save();
};

exports.createStatusGroup = async (req, res) => {
  const user = await userModel.findById(req.params._id);

  const status = new statusModel({
    text: req.body.text,
    avatar: user.avatar,
    userName: user.userName,
    from: user._id,
    image: req.body.url,
    group: {
      id: req.body.group._id,
      name: req.body.group.groupName,
    },
    like: [],
    comment: [],
  });

  const group = await groupModel.findById(req.body.group._id);

  group.data.member.forEach(async (member) => {
    const userMember = await userModel.findById(member);
    userMember.status = [
      { id: "group-" + req.body.group._id + "-" + status._id, like: false },
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
    friend.status = [
      {
        id: status._id,
        like: false,
      },
      ...friend.status,
    ];
    await friend.save();
  });
  friend2.forEach(async (f) => {
    const friend = await userModel.findById(f.userId1);
    friend.status = [
      {
        id: status._id,
        like: false,
      },
      ...friend.status,
    ];
    await friend.save();
  });

  user.status = [
    {
      id: status._id,
      like: false,
    },
    ...user.status,
  ];
  await user.save();
  await status.save();

  res.send(status);
};

exports.getStatus = async (req, res) => {
  let status = await statusModel.findById(req.params._id);
  res.send(status);
};
