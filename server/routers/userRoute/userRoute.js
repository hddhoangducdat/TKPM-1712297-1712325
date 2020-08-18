const express = require("express");
const {
  createUser,
  getUser,
  getAll,
  updateNewUser,
} = require("../../controllers/userController/userController");

const userRoute = express();

userRoute.post("/", createUser);
userRoute.get("/:_id", getUser);
userRoute.get("/", getAll);
userRoute.patch("/update/starting/:id", updateNewUser);

module.exports = userRoute;
