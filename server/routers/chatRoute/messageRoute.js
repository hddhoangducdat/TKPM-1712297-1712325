const express = require("express");
const {
  saveMessge,
  messageNoti,
  seenMessage,
  messageSelfNoti,
} = require("../../controllers/chatController/chatDialog");

const messageRoute = express();

messageRoute.patch("/save", saveMessge);
messageRoute.patch("/noti/:_id", messageNoti);
messageRoute.patch("/noti/self/:_id", messageSelfNoti);
messageRoute.post("/seen/:_id", seenMessage);

module.exports = messageRoute;
