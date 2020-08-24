const express = require("express");

// Connect controllers to route
const {
  addFriend,
  acceptFriend,
  getRequestFriend,
  unfriend,
  cancleRequest,
  getFriend,
} = require("../../controllers/relationshipController/relationshipController");

const relationshipRoute = express();

relationshipRoute.post("/add", addFriend);
relationshipRoute.get("/:id1/:id2", getRequestFriend);
relationshipRoute.patch("/acceptRequest", acceptFriend);
relationshipRoute.delete("/cancle/:id1/:id2", cancleRequest);
relationshipRoute.delete("/unfriend", unfriend);
relationshipRoute.get("/get/friend/:_id", getFriend);

module.exports = relationshipRoute;
