const mongoose = require("mongoose");
const { books } = require("googleapis/build/src/apis/books");

const notiSchema = new mongoose.Schema({
  from: String,
  to: String,
  avatar: String,
  userName: String,
  type: String,
  seen: { type: Boolean, default: false },
  name: { type: String, default: "none" },
});

module.exports = mongoose.model("Noti", notiSchema);
