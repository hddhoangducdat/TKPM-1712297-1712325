const express = require("express");

const deadlineRoute = express();

const {
  uploadFile,
  createDeadline,
  userSubmittion,
  uploadFiletoDrive,
} = require("../../controllers/deadlineController/deadlineController");

deadlineRoute.post("/", uploadFile, createDeadline, uploadFiletoDrive);
deadlineRoute.patch("/submitFile/:_id", uploadFile, userSubmittion);

module.exports = deadlineRoute;
