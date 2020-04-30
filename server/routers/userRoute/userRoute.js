const express = require("express");
const { getUser } = require("../../controllers/userController/userController");

const userRoute = express();

userRoute.get("/list", getUser);

module.exports = userRoute;
