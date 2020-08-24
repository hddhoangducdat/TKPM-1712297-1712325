const notiModel = require("../../models/notiModel");

exports.saveNoti = async (req, res) => {
  const noti = new notiModel(req.body);
  console.log(noti);
  await noti.save();
};

exports.getNoti = async (req, res) => {
  console.log(req.params._id);
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
