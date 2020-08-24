const mongoose = require("mongoose");

const notiSchema = new mongoose.Schema({
  from: String,
  to: String,
  avatar: String,
  userName: String,
  type: String,
});

module.exports = mongoose.model("Noti", notiSchema);
