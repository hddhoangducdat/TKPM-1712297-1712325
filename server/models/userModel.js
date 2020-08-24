const mongoose = require("mongoose");
const { intersection } = require("lodash");

const userSchema = new mongoose.Schema({
  userName: { type: String, unique: true, required: true, lowercase: true },
  password: { type: String, required: [true, "Please provide a password"] },
  email: { type: String, unique: true, required: true, lowercase: true },
  gender: Boolean,
  phoneNumber: String,
  address: String,
  avatar: {
    type: String,
    default: `https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/20597386_1241759402601401_5316710678698048480_n.png?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=ITYs-8YXNPsAX9AkPwY&_nc_ht=scontent-hkt1-1.xx&oh=b9bdb87b32faf5dd5c1ab7a6a80a7043&oe=5F6A494E`,
  },
  noti: {
    type: Number,
    default: 0,
  },
  chatBox: Array,
  status: Array,
});

module.exports = mongoose.model("User", userSchema);
