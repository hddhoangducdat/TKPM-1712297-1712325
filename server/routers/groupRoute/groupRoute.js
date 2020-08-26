const express = require("express");

const groupRoute = express();

const {
  getGroup,
  userUploadFile,
  createGroupUser,
  uploadImageCover,
  addMember,
} = require("../../controllers/groupController/groupController");

groupRoute.post("/", userUploadFile, createGroupUser, uploadImageCover);
groupRoute.patch("/addMember/:_id", addMember);
groupRoute.get("/get/:_id", getGroup);

module.exports = groupRoute;
