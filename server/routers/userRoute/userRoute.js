const express = require("express");
const {
  getUser,
  updateNewUser,
} = require("../../controllers/userController/userController");

const userRoute = express();

userRoute.get("/list", getUser);
userRoute.patch("/update/starting/:id", updateNewUser);

module.exports = userRoute;
