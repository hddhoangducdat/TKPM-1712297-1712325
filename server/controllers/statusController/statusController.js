const userModel = require("../../models/userModel");
const relationModel = require("../../models/userRelationshipModel");
const statusModel = require("../../models/statusModel");

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
  console.log(friend1);
  console.log(friend2);
  const status = new statusModel({
    text: req.body.text,
    avatar: user.avatar,
    userName: user.userName,
    from: user._id,
    image: req.body.url,
    like: [],
    comment: [],
  });
  console.log(status);
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
