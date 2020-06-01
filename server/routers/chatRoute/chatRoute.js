const express = require("express");
const {
  chatDialogCreate,
  getChatDialog,
  saveChatDialog,
} = require("../../controllers/chatController/chatDialog");

const chatRoute = express();

chatRoute.post("/create", chatDialogCreate);

chatRoute.patch("/chatDialog/save/:id", saveChatDialog);
chatRoute.get("/:id", getChatDialog);

module.exports = chatRoute;
