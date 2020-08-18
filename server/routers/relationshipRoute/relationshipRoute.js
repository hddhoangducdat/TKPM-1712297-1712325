const express = require("express");

// Connect controllers to route
const {
  addFriend,
  acceptFriend,
  getRequestFriend,
  unfriend,
  cancleRequest,
} = require("../controllers/relationshipController");

const relationshipRoute = express();

relationshipRoute.post("/add", addFriend);
relationshipRoute.get("/:id1/:id2", getRequestFriend);
relationshipRoute.patch("/acceptRequest/:_id", acceptFriend);
relationshipRoute.delete("/cancle/:_id", cancleRequest);
relationshipRoute.delete("/unfriend", unfriend);

module.exports = relationshipRoute;
