const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    content: { type: String, required: true },
    like: { type: Array },
    commemt: { type: Array },
    isPostGroup: { type: Boolean, default: false },
    files: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
