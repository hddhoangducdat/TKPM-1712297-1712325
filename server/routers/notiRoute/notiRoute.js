const express = require("express");

const notiRoute = express();

const {
  saveNoti,
  updateRequest,
  getNoti,
} = require("../../controllers/notiController/notiController");

notiRoute.post("/save", saveNoti);
notiRoute.get("/get/:_id", getNoti);
notiRoute.patch("/update/request", updateRequest);

module.exports = notiRoute;
