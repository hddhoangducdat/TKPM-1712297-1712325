const fileModel = require("../../models/fileModel");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");
const OAuth2Data = require("../../../credentials.json");
const { resolve } = require("path");
const { model } = require("../../models/fileModel");
const { client_secret, client_id, redirect_uris } = OAuth2Data.installed;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

// sourceFolder in GG drive
const targetFolderId = "12OVzJ1Jxr0p5SUNuYgCxNu4sC6hqelsK";
const SCOPES = ["https://www.googleapis.com/auth/drive"];
const TOKEN_PATH = "token.json";

fs.readFile(TOKEN_PATH, (err, token) => {
  if (err) return getAccessToken(oAuth2Client);
  oAuth2Client.setCredentials(JSON.parse(token));
});

function getAccessToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  console.log("Authorize this app by visiting this url:", authUrl);
}

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const filePath = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "/client/public/files"
    );
    cb(null, filePath);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    const filename = file.originalname.split(".")[0];
    cb(null, `user-${filename}-${Date.now()}.${ext}`);
  },
});

const upload = multer({ storage: multerStorage });

exports.userUploadFile = upload.single("file");

exports.userUploadFiles = upload.array("files", 6);

exports.uploadFile = async (req, res) => {
  const drive = google.drive({
    version: "v3",
    auth: oAuth2Client,
  });

  const filemetadata = {
    name: req.file.filename,
    parents: [targetFolderId],
  };

  const media = {
    mimeType: req.file.mimetype,
    body: fs.createReadStream(req.file.path),
  };

  await drive.files.create(
    { resource: filemetadata, media: media, fields: "id" },
    async (err, file) => {
      if (err) throw err;

      //delete the file in localhost
      fs.unlinkSync(req.file.path);
      console.log(req.body.userId);
      req.body.fileId = file.data.id;
      // create fileModel
      // console.log(req.body.fileId);
      const modelFile = new fileModel();
      modelFile.fileName = req.file.filename;
      modelFile.fileUrl = `https://drive.google.com/uc?id=${req.body.fileId}&export=download`;
      modelFile.userId = req.body.userId;

      await modelFile.save(null, function (err, docs) {
        if (err) return res.status(400).json("Error: " + err);
        if (docs) return res.json(docs);
      });
    }
  );
};

exports.getFile = async (req, res) => {
  await fileModel.findById(req.params._id, function (err, docs) {
    if (err) return res.status(400).json("Error: " + err);
    if (docs) return res.json(docs);
    return res.status(400).json("Not found!");
  });
};

exports.uploadFilestoDrive = async (req, res, next) => {
  const drive = google.drive({
    version: "v3",
    auth: oAuth2Client,
  });

  req.body.files = [];
  await Promise.all(
    req.files.map(async (e) => {
      const filemetadata = {
        name: e.filename,
        parents: [targetFolderId],
      };

      const media = {
        mimeType: e.mimetype,
        body: fs.createReadStream(e.path),
      };

      //create fileModel
      const modelFile = new fileModel();
      modelFile.fileName = e.filename;
      modelFile.fileUrl = "default";
      modelFile.userId = req.body.userId;

      await modelFile.save();
      const id = modelFile._id;

      req.body.files.push(id);

      await drive.files.create(
        { resource: filemetadata, media: media, fields: "id" },
        async (err, file) => {
          if (err) throw err;

          //delete the file in localhost
          fs.unlinkSync(e.path);

          // upload model.fileUrl
          const fileUrl = `https://drive.google.com/uc?id=${file.data.id}&export=download`;
          const model = await fileModel.findById(id);
          model.fileUrl = fileUrl;
          model.markModified("fileUrl");
          await model.save();
        }
      );
    })
  );

  next();
};

exports.uploadFiles = async (req, res) => {
  const _arrObj = [];
  await Promise.all(
    req.body.files.map(async (e) => {
      const file = await fileModel.findById(e);
      _arrObj.push(file);
    })
  );
  res.json(_arrObj);
};
