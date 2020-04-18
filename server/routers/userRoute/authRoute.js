const express = require("express");

const authRoute = express.Router();

const {
  register,
  login,
} = require("../../controllers/userController/authController");

const getAccount = require("../../controllers/userController/curdInfoController");

const tokenValidation = require("../../middlewares/tokenValidation");

authRoute.post("/register", register);

authRoute.post("/login", login);

authRoute.get("/", tokenValidation, getAccount);

module.exports = authRoute;
