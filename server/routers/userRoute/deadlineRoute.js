const express = require("express");

const deadlineRoute = express();

const {
  uploadFile,
  createDeadline,
  userSubmittion,
  uploadFiletoDrive,
  getDeadline,
  getFilesDeadline,
  downloadAll,
  downloadFile,
} = require("../../controllers/deadlineController/deadlineController");

deadlineRoute.post("/", uploadFile, createDeadline, uploadFiletoDrive);
deadlineRoute.patch("/submitFile/:_id", uploadFile, userSubmittion);
deadlineRoute.get("/:_id", getDeadline);
deadlineRoute.get("/getAllFile/:_id", getFilesDeadline);
deadlineRoute.patch("/downloadFile", downloadFile);
module.exports = deadlineRoute;
