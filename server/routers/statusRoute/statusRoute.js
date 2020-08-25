const express = require("express");

const {
  createStatus,
  getStatus,
  createStatusGroup,
} = require("../../controllers/statusController/statusController");

const statusRoute = express();

statusRoute.post("/post/:_id", createStatus);
statusRoute.get(`/get/:_id`, getStatus);
statusRoute.post("/post/group/:_id", createStatusGroup);

module.exports = statusRoute;
