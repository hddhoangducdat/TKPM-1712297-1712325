const express = require("express");

const {
  getMessage,
  createMessage,
  deleteMessage,
} = require("../controllers/messageController");

const messageRoute = express();

messageRoute.get("/:_id", getMessage);
messageRoute.post("/", createMessage);
messageRoute.delete("/_:id", deleteMessage);

module.exports = messageRoute;
