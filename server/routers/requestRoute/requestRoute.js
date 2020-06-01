const express = require("express");
const {
  addFriend,
  acceptFriend,
  cancleFriend,
  unFriend,
  getRequest,
} = require("../../controllers/requestController/requestController");

const requestRoute = express();

requestRoute.post("/add/friend/:id", addFriend);
requestRoute.get("/get/id1/:id1/id2/:id2", getRequest);
requestRoute.patch("/accept/friend/:id", acceptFriend);
requestRoute.delete("/cancle/friend/:id", cancleFriend);
requestRoute.patch("/unfriend", unFriend);

module.exports = requestRoute;
