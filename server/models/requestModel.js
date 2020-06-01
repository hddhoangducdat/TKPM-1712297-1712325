const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  from: String,
  to: String,
});

module.exports = mongoose.model("Request", requestSchema);
