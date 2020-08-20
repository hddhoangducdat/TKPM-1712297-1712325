const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, unique: true, required: true, lowercase: true },
  password: { type: String, required: [true, "Please provide a password"] },
  email: { type: String, unique: true, required: true, lowercase: true },
  gender: Boolean,
  phoneNumber: String,
  dateOfBirth: Date,
  country: String,
  avatar: {
    type: String,
    default: `https://drive.google.com/uc?id=1jjBoYG9Lm5WRSsEu2VAZ8_qxk14Gbbdc&export=download`,
  },
  chatBox: Array,
});

module.exports = mongoose.model("User", userSchema);
