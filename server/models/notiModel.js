const mongoose = require("mongoose");

const notiSchema = new mongoose.Schema({
  message: { type: String, required: true },
  type: { type: String, enum: ["addFriend", "acceptFriend"], required: true },
  createBy: { type: String, required: true },
});

module.exports = mongoose.model("Noti", notiSchema);
