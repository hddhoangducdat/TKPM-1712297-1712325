const mongoose = require("mongoose");

const dataGroupModel = new mongoose.Schema({
  _id: false,
  status: Array,
  files: Array,
  deadlines: Array,
  member: Array,
  quantity: { type: Number, default: 1 },
  chatGroup: { type: String },
});

const groupUserSchema = new mongoose.Schema({
  groupName: { type: String, default: "group" + Date.now() },
  avatar: {
    type: String,
    default:
      "https://www.facebook.com/images/groups/Null-Header-1640x500-2x.png",
  },
  admin: { type: String, required: true },
  data: { type: dataGroupModel, default: () => ({}) },
});

module.exports = mongoose.model("Group", groupUserSchema);
