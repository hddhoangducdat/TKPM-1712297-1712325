const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: String,
  password: String,
  email: String,
  gender: Boolean,
  phoneNumber: String,
  dateOfBirth: Date,
  country: String,
  avatar: String,
  chatBox: Array,
});

module.exports = mongoose.model("User", userSchema);
