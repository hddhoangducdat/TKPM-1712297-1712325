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
groupRoute.get("/get/:_id", getGroup);
groupRoute.get("/getAllFile/:_id", getAllFile);
groupRoute.post("/add/member/:_id", addMember);

module.exports = groupRoute;
