const express = require("express");

const fileRoute = express();

const {
  getFile,
  userUploadFile,
  userUploadFiles,
  uploadFilestoDrive,
  uploadFile,
  uploadFiles,
} = require("../../controllers/fileController/fileController");

fileRoute.get("/:_id", getFile);
fileRoute.post("/", userUploadFile, uploadFile);
fileRoute.post(
  "/uploadFiles",
  userUploadFiles,
  uploadFilestoDrive,
  uploadFiles
);
module.exports = fileRoute;
