const notiModel = require("../../models/notiModel");
const userModel = require("../../models/userModel");

exports.notiSeen = async (req, res) => {
  await notiModel.findByIdAndUpdate(req.params._id, {
    seen: true,
  });
  const user = await userModel.findById(req.body.id);
  user.noti = user.noti - 1;
  await user.save();
};

exports.saveNoti = async (req, res) => {
  const noti = new notiModel(req.body);
  const user = await userModel.findById(req.body.to);
  user.noti = user.noti + 1;
  await user.save();
  await noti.save();
  res.send(noti);
};

exports.addNoti = async (req, res) => {
  const user = await userModel.findById(req.params._id);
  user.noti = user.noti + 1;
  await user.save();
};

exports.getNoti = async (req, res) => {
  const notis = await notiModel.find({
    to: req.params._id,
  });

  res.send(notis);
};

exports.updateRequest = async (req, res) => {
  notiModel.findByIdAndDelete(req.body._id);
  const noti = new notiModel(res.body);
  await noti.save();
};

exports.updateNotiAccept = async (req, res) => {
  const noti = await notiModel.findOneAndUpdate(
    {
      from: req.body.from,
      to: req.body.to,
      type: "add",
    },
    {
      type: "you-accept",
    }
  );
  res.send(noti);
};
