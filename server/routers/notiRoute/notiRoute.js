const express = require("express");

const notiRoute = express();

const {
  createNoti,
} = require("../../controllers/notiController/notiController");

notiRoute.post("/", createNoti);

module.exports = notiRoute;
