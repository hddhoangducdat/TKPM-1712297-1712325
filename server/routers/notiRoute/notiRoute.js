const express = require("express");

const notiRoute = express();

const {
  saveNoti,
  updateRequest,
  getNoti,
  updateNotiAccept,
  notiSeen,
  addNoti,
} = require("../../controllers/notiController/notiController");

notiRoute.post("/save", saveNoti);
notiRoute.get("/get/:_id", getNoti);
notiRoute.patch("/update/request", updateRequest);
notiRoute.patch("/update/accept", updateNotiAccept);
notiRoute.patch("/seen/:_id", notiSeen);
notiRoute.patch(`/add/:_id`, addNoti);

module.exports = notiRoute;
