const userModel = require("../../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.confirmEmail = async (req, res) => {
  try {
    const { user } = jwt.verify(req.token, process.env.EMAIL_SECRET);
    const newAccount = new userModel(user);
    await newAccount.save();
    res.send("Register successful");
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.updatePassword = async (req, res) => {
  try {
    let salt = await bcrypt.genSalt(10);
    let passwordHash = await bcrypt.hash(req.body.password, salt);
    const { user } = jwt.verify(req.token, process.env.PASSWORD_SECRET);
    let updateUser = await userModel.findByIdAndUpdate(user._id, {
      password: passwordHash,
    });
    await updateUser.save();
    res.send(updateUser);
  } catch (err) {
    res.status(400).send(err);
  }
};
