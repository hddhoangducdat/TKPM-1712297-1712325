const express = require("express");

const authRoute = express.Router();

const {
  confirmEmail,
  updatePassword,
} = require("../../controllers/authController/confirm");

const {
  register,
  create,
  login,
  requestChangePassword,
} = require("../../controllers/authController/authController");

const getAccount = require("../../controllers/authController/curdInfoController");

const tokenValidation = require("../../middlewares/tokenValidation");

authRoute.post("/register", register);

authRoute.post("/login", login);

authRoute.post("/create", create);

authRoute.post("/requestChangePassword", requestChangePassword);

authRoute.get("/confirm", tokenValidation, confirmEmail);

authRoute.get("/", tokenValidation, getAccount);

authRoute.patch("/updatePassword", tokenValidation, updatePassword);

module.exports = authRoute;
