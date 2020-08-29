const express = require("express");

const {
  createUser,
  getUser,
  getAll,
  updateNewUser,
  updateAvatar,
  getAvatar,
  searchUser,
} = require("../../controllers/userController/userController");

const userRoute = express();

userRoute.post("/", createUser);
userRoute.post("/search/:key", searchUser);
userRoute.get("/:_id", getUser);
userRoute.get("/", getAll);
userRoute.patch("/update/starting/:_id", updateNewUser);
userRoute.patch("/update/avatar/:_id", updateAvatar);
// userRoute.get("/getAvatar/:_id", getAvatar);
module.exports = userRoute;
