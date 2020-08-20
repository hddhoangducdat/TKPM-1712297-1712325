const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  text: String,
  fromUser: String,
  time: Date,
  chatBox: String,
});

module.exports = mongoose.model("Message", messageSchema);
