const express = require("express");

const postRoute = express();

const {
  uploadFiles,
  uploadPost,
  uploadFiletoDrive,
} = require("../../controllers/postController/postController");

postRoute.post("/", uploadFiles, uploadFiletoDrive, uploadPost);

module.exports = postRoute;
