const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  password: String,
  data: {
    fullName: String,
    avatar: String,
    email: String,
  },
});

module.exports = mongoose.model("User", userSchema);
