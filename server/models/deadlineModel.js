const mongoose = require("mongoose");

const deadlineModel = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  timeStart: { type: Date, default: Date.now() },
  timeEnd: { type: Date, default: Date.now() + 7 * 86400000 },
  fileDescription: { type: String },
  files: { type: Array },
  groupId: { type: String, required: true },
});

module.exports = mongoose.model("Deadline", deadlineModel);
