const mongoose = require("mongoose");

const deadlineModel = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  timeStart: { type: Date, default: Date.now() },
  timeEnd: { type: Date, default: Date.now() + 7 * 86400000 },
  description: { type: String },
  files: { type: Array },
  fileUrl: { type: String, default: "none" },
  fileName: { type: String },
  groupId: { type: String, required: true },
});

module.exports = mongoose.model("Deadline", deadlineModel);
