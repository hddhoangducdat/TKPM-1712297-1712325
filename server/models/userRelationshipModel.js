const mongoose = require("mongoose");

const userRelationshipSchema = new mongoose.Schema({
  userId1: String,
  userId2: String,
  type: String,
});

module.exports = mongoose.model("Relationship", userRelationshipSchema);
