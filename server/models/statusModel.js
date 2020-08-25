const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
  text: String,
  from: String,
  avatar: String,
  image: String,
  userName: String,
  like: Array,
  comment: Array,
  group: {
    id: {
      type: String,
      default: "none",
    },
    name: String,
  },
});

module.exports = mongoose.model("Status", statusSchema);
