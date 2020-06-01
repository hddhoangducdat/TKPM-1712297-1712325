const userModel = require("../../models/userModel");

exports.getUser = async (req, res) => {
  let user = await userModel.find().select("_id data");
  res.send(user);
};

exports.updateNewUser = async (req, res) => {
  let user = await userModel.findById(req.params.id);
  user.data.number = req.body.number;
  user.data.address = req.body.address;
  user.data.gender = req.body.gender;

  await user.save();
  res.send(user);
};
