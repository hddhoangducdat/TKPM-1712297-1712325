const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  message: Array,
});

module.exports = mongoose.model("Chat", chatSchema);
