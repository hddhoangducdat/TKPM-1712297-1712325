const express = require("express");

const groupRoute = express();

const {
  getGroup,
  userUploadFile,
  createGroupUser,
  uploadImageCover,
  addMember,
  getAllFile,
} = require("../../controllers/groupController/groupController");

groupRoute.post("/", userUploadFile, createGroupUser, uploadImageCover);
groupRoute.patch("/addMember/:_id", addMember);
groupRoute.get("/get/:_id", getGroup);
groupRoute.get("/getAllFile/:_id", getAllFile);

module.exports = groupRoute;
