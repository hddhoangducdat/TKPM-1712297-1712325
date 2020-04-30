const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  user1: String,
  user2: String,
  message: Array,
});

module.exports = mongoose.model("Chat", chatSchema);
