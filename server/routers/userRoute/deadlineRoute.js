const express = require("express");

const deadlineRoute = express();

const {
  uploadFile,
  createDeadline,
  userSubmittion,
  uploadFiletoDrive,
  getDeadline,
} = require("../../controllers/deadlineController/deadlineController");

deadlineRoute.post("/", uploadFile, createDeadline, uploadFiletoDrive);
deadlineRoute.patch("/submitFile/:_id", uploadFile, userSubmittion);
deadlineRoute.get("/:_id", getDeadline);

module.exports = deadlineRoute;
