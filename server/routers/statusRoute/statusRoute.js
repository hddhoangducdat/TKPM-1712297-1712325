const express = require("express");

const {
  createStatus,
  getStatus,
} = require("../../controllers/statusController/statusController");

const statusRoute = express();

statusRoute.post("/post/:_id", createStatus);
statusRoute.get(`/get/:_id`, getStatus);

module.exports = statusRoute;
