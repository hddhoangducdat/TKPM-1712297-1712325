const express = require("express");
const {
  getChatDialog,
  createChatGroupDialog,
  createChatDialog,
  checkIsExisted,
  saveMessage,
} = require("../../controllers/chatController/chatDialog");

const chatRoute = express();

chatRoute.get("/:_id", getChatDialog);
chatRoute.post("/createGroup", createChatGroupDialog);
chatRoute.post("/", createChatDialog);
chatRoute.get("/check/:id1/:id2", checkIsExisted);
chatRoute.patch("/saveMessage/:_id", saveMessage);

module.exports = chatRoute;
