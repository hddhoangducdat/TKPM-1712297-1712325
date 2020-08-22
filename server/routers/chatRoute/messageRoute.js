const express = require("express");
const { saveMessge } = require("../../controllers/chatController/chatDialog");

const messageRoute = express();

messageRoute.patch("/save", saveMessge);

module.exports = messageRoute;
