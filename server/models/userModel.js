const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  password: String,
  data: {
    fullName: String,
    avatar: String,
    email: String,
    number: String,
    address: String,
    gender: String,
    chatBox: Array,
    friend: Array,
  },
});

module.exports = mongoose.model("User", userSchema);
