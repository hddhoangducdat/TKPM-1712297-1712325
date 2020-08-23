const mongoose = require("mongoose");

const dataGroupModel = new mongoose.Schema({
  _id: false,
  status: Array,
  files: Array,
  deadlines: Array,
  member: Array,
  quantity: { type: Number, default: 1 },
});

const groupUserSchema = new mongoose.Schema({
  groupName: { type: String, required: true },
  avatar: {
    type: String,
    default:
      "https://www.facebook.com/images/groups/Null-Header-1640x500-2x.png",
  },
  admin: { type: String, required: true },
  data: { type: dataGroupModel, default: () => ({}) },
});

module.exports = mongoose.model("Group", groupUserSchema);
