const express = require("express");

const {
  createStatus,
  getStatus,
  createStatusGroup,
  likeStatus,
  unlikeStatus,
  commentStatus,
} = require("../../controllers/statusController/statusController");

const statusRoute = express();

statusRoute.post("/post/:_id", createStatus);
statusRoute.get(`/get/:_id`, getStatus);
statusRoute.post("/post/group/:_id", createStatusGroup);
statusRoute.post("/like/:_id", likeStatus);
statusRoute.post("/comment/:_id", commentStatus);
statusRoute.post("/unlike/:_id", unlikeStatus);

module.exports = statusRoute;
