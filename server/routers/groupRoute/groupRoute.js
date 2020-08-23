const express = require("express");

const groupRoute = express();

const {
  userUploadFile,
  createGroupUser,
  uploadImageCover,
  addMember,
} = require("../../controllers/groupController/groupController");

groupRoute.post("/", userUploadFile, createGroupUser, uploadImageCover);
groupRoute.patch("/addMember/:_id", addMember);

module.exports = groupRoute;
