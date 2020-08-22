const mongoose = require("mongoose");

const chatBoxSchema = new mongoose.Schema({
  message: Array,
  member: Array,
  isGroup: Boolean,
});

module.exports = mongoose.model("Chat", chatBoxSchema);
