const userModel = require("../../models/userModel");

exports.getUser = async (req, res) => {
  let user = await userModel.find().select("_id data");
  res.send(user);
};
