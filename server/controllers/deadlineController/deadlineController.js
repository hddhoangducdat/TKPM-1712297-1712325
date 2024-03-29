const deadlineModel = require("../../models/deadlineModel");
const fileModel = require("../../models/fileModel");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");
const OAuth2Data = require("../../../credentials.json");
const groupUserModel = require("../../models/groupUserModel");
const { client_secret, client_id, redirect_uris } = OAuth2Data.installed;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);
const os = require("os");
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
    const filePath = path.join(__dirname, "..", "..", "..", "../../");
    cb(null, filePath);
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".")[1];
    const newExt =
      ext === "octet-stream" ? file.originalname.split(".")[1] : ext;
    const filename = file.originalname.split(".")[0];
    cb(null, `user-${filename}-${Date.now()}.${newExt}`);
  },
});

const upload = multer({ storage: multerStorage });

// exports.uploadFiles = upload.fields([{ name: "files", maxCount: 5 }]);
exports.uploadFile = upload.single("file");

exports.uploadFiletoDrive = async (req, res) => {
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

      // create Model

      try {
        const newModel = new deadlineModel();
        newModel.title = req.body.title;
        newModel.description = req.body.description;
        newModel.groupId = req.body.groupId;
        newModel.fileUrl = `https://drive.google.com/uc?id=${file.data.id}&export=download`;
        newModel.fileName = req.file.filename;
        if (req.body.timeEnd !== undefined) {
          req.body.timeEnd = new Date(req.body.timeEnd);
        }
        if (
          Object.prototype.toString.call(req.body.timeEnd) === "[object Date]"
        ) {
          if (isNaN(req.body.timeEnd.getTime())) {
            //Date is not valid
            throw "Invalid Date";
          } else {
            //Date is valid
            newModel.timeEnd = req.body.timeEnd;
          }
        } else {
          // Not a date
          // do nothing cause timeEnd is default
        }

        const groupModel = await groupUserModel.findById(req.body.groupId);
        groupModel.data.deadlines = [
          newModel._id,
          ...groupModel.data.deadlines,
        ];
        groupModel.markModified("data.deadlines");
        await groupModel.save();

        await newModel.save(null, function (err, docs) {
          if (err) return res.status(400).json("Error: " + err);
          if (docs) return res.json(docs);
        });
      } catch (err) {
        return res.status(400).json("Error: " + err);
      }
    }
  );
};

exports.createDeadline = async (req, res, next) => {
  if (req.file !== undefined) {
    //TH co gui fileDescription
    next();
  } else {
    //TH khong gui fileDescription
    try {
      const newModel = new deadlineModel();
      newModel.title = req.body.title;
      newModel.description = req.body.description;
      newModel.groupId = req.body.groupId;
      if (req.body.timeEnd !== undefined) {
        req.body.timeEnd = new Date(req.body.timeEnd);
      }
      if (
        Object.prototype.toString.call(req.body.timeEnd) === "[object Date]"
      ) {
        if (isNaN(req.body.timeEnd.getTime())) {
          //Date is not valid
          throw "Invalid Date";
        } else {
          //Date is valid
          newModel.timeEnd = req.body.timeEnd;
        }
      } else {
        // Not a date
        // do nothing cause timeEnd is default
      }
      console.log(newModel);

      const groupModel = await groupUserModel.findById(req.body.groupId);
      groupModel.data.deadlines = [newModel._id, ...groupModel.data.deadlines];
      groupModel.data.files = [newModel._id, ...groupModel.data.files];
      groupModel.markModified("data.deadlines");
      groupModel.markModified("data.files");
      await groupModel.save();

      await newModel
        .save()
        .then((docs) => res.json(docs))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      return res.status(400).json("Error: " + err);
    }
  }
};

exports.userSubmittion = async (req, res) => {
  const drive = google.drive({
    version: "v3",
    auth: oAuth2Client,
  });

  const filemetadata = {
    name: req.file.filename,
    parents: [targetFolderId],
  };

  if (req.file.mimetype.split("/")[1] === "octet-stream") {
    const ext = req.file.originalname.split(".")[1];
    req.body.newMimeType = `application/${ext}`;
  } else {
    req.body.newMimeType = req.file.mimetype;
  }

  const media = {
    mimeType: req.body.newMimeType,
    body: fs.createReadStream(req.file.path),
  };

  await drive.files.create(
    { resource: filemetadata, media: media, fields: "id" },
    async (err, file) => {
      if (err) throw err;

      //delete the file in localhost
      fs.unlinkSync(req.file.path);

      //create new fileModel
      const modelFile = new fileModel();
      modelFile.fileName = req.file.filename;
      modelFile.fileUrl = `https://drive.google.com/uc?id=${file.data.id}&export=download`;
      modelFile.userId = req.body.userId;

      await modelFile.save();
      // push fileId to deadlineModel
      const deadline = await deadlineModel.findById(req.params._id);

      deadline.files = [
        ...deadline.files,
        {
          from: req.body.userId,
          fileName: req.file.filename,
          fileUrl: `https://drive.google.com/uc?id=${file.data.id}&export=download`,
        },
      ];
      console.log(deadline);
      await deadline.save();
      res.json(deadline);
    }
  );
};

exports.getDeadline = async (req, res) => {
  const response = await deadlineModel.find({
    groupId: req.params._id,
  });
  res.send(response);
};

exports.getFilesDeadline = async (req, res) => {
  console.log(req.params._id);

  //return all file submit of deadline
  await deadlineModel
    .findById(req.params._id)
    .then((docs) => {
      // if docs.files.length === 0 . return empty array
      // else

      res.send(docs.files);

      // )
    })
    .catch((err) => res.json("Error: " + err));
};

//

exports.downloadFile = async (req, res) => {
  //req.body: {fileName, fileUrl, from}
  const obj = {
    fileName: req.body.fileName,
    fileUrl: req.body.fileUrl,
    userId: req.body.from,
  };
  console.log(obj);
  await fileModel
    .find(obj)
    .then(async (docs) => {
      //Split file id

      const startStr = docs[0].fileUrl.indexOf("=") + 1;
      const endStr = docs[0].fileUrl.indexOf("&");
      const fileId = docs[0].fileUrl.substring(startStr, endStr);

      let dir =
        req.body.dir === undefined
          ? path.join(os.homedir(), "downloads/")
          : req.body.dir;
      console.log(dir);
      const filePath = path.join(dir, docs[0].fileName.replace(/\s+/g, ""));
      console.log(`Writing to ${filePath}`);
      const dest = fs.createWriteStream(filePath, { flags: "w" });
      const drive = google.drive({
        version: "v3",
        auth: oAuth2Client,
      });

      await drive.files
        .get(
          {
            fileId: fileId,
            alt: "media",
            parents: [targetFolderId],
          },
          { responseType: "stream" }
        )
        .then((rs) => {
          let progress = 0;
          rs.data
            .on("end", () => {
              console.log("Done downloading file.");
              // Download successfully ->Send code
              res.json("OK");
            })
            .on("error", (err) => {
              console.error("Error downloading file");
            })
            .on("data", (d) => {
              progress += d.length;
              if (process.stdout.isTTY) {
                process.stdout.clearLine();
                process.stdout.cursorTo(0);
                process.stdout.write(`Downloaded ${progress} bytes`);
              }
            })
            .pipe(dest);
        });
    })
    .catch((err) => res.status(400).json("Error: " + err));

  // start download with gg api
};

exports.getDeadlineAll = async (req, res) => {
  const deadline = await deadlineModel.find({
    groupId: req.params._id,
  });
  res.send(deadline);
};
