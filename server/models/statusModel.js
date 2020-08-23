const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
  text: String,
  from: String,
  avatar: String,
  image: String,
  userName: String,
  like: Array,
  comment: Array,
});

module.exports = mongoose.model("Status", statusSchema);
