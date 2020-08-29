const mongoose = require("mongoose");

const fileUserModel = new mongoose.Schema({
  _id: false,
  from: { type: String, required: true },
  fileName: { type: String, required: true },
  fileUrl: { type: String, required: true },
});

const deadlineModel = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  timeStart: { type: Date, default: Date.now() },
  timeEnd: { type: Date, default: Date.now() + 7 * 86400000 },
  description: { type: String },
  files: { type: [fileUserModel], default: () => [] },
  fileUrl: { type: String, default: "none" },
  fileName: { type: String },
  groupId: { type: String, required: true },
});

module.exports = mongoose.model("Deadline", deadlineModel);
