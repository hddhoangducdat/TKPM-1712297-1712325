const userModel = require("../../models/userModel");
const multer = require("multer");
const fs = require("fs");
const { google } = require("googleapis");
const OAuth2Data = require("../../../credentials.json");
const path = require("path");
const { client_secret, client_id, redirect_uris } = OAuth2Data.installed;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

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
      "/public/img/users"
    );
    cb(null, filePath);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `user-${req.params._id}-${Date.now()}.${ext}`);
  },
});

const multerFiler = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image. Please upload only image"), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFiler });

const userUploadAvatar = upload.single("photo");

const filterObj = (obj, ...allowedFileds) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFileds.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
};

exports.createUser = async (req, res) => {
  const modelUser = new userModel();
  modelUser.userName = req.body.userName;
  modelUser.password = req.body.password;
  modelUser.email = req.body.email;

  await modelUser
    .save()
    .then(() => res.json(modelUser))
    .catch((err) => res.status(400).send(err));
};

exports.getUser = async (req, res) => {
  await userModel.findById(req.params._id, function (err, docs) {
    if (err) res.status(400).json("Error: " + err);
    if (docs) res.json(docs);
    res.status(404).json("Error: Not found");
  });
};

exports.getAll = async (req, res) => {
  await userModel.find(function (err, docs) {
    if (err) return res.status(400).json("Error: " + err);
    if (docs) return res.json(docs);
    return res.status(404).json("Error: Not found");
  });
};

exports.updateAvatar = async (req, res) => {
  //username && email not update
  let filteredBody = filterObj(req.body, "username", "email");

  userUploadAvatar(req, res, function (err) {
    if (err) throw err;
    console.log(req.file.path);
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

    drive.files.create(
      { resource: filemetadata, media: media, fields: "id" },
      async (err, file) => {
        if (err) throw err;

        //delete the file image
        fs.unlinkSync(req.file.path);
        // update
        filteredBody.avatar = `https://drive.google.com/uc?id=${file.data.id}&export=download`;
        await userModel.findByIdAndUpdate(
          req.params._id,
          filteredBody,
          { new: true, runValidators: true },
          function (err, docs) {
            if (err) return res.status(400).json("Error: " + err);
            if (docs) return res.json(docs);
            return res.status(404).json("Error: Not found");
          }
        );
        console.log(`File id: ${file.data.id}`);
      }
    );
  });
};

exports.getAvatar = (req, res) => {
  // lay file ve
  const fileId = "1_nwvf02WBw3S_h3-NhBRjpwhrOFthgsF";
  const filePath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "/public/img/users/test.jpg"
  );
  console.log(`Writing to ${filePath}`);
  const dest = fs.createWriteStream(filePath);

  const drive = google.drive({
    version: "v3",
    auth: oAuth2Client,
  });

  drive.files
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
          res.json("OK!");
        })
        .on("error", (err) => {
          console.error("Error downloading file.");
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
};

exports.updateNewUser = async (req, res) => {
  let user = await userModel.findById(req.params._id);
  user.data.number = req.body.number;
  user.data.address = req.body.address;
  user.data.gender = req.body.gender;

  await user.save();
  res.send(user);
};
