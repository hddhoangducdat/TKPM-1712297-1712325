const userModel = require("../../models/userModel");
const relationshipModel = require("../../models/userRelationshipModel");
<<<<<<< HEAD
=======
const fileModel = require("../../models/fileModel");
const path = require("path");

const {
  getRelationShip,
} = require("../relationshipController/relationshipController");

const filterObj = (obj, ...allowedFileds) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFileds.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
};
>>>>>>> 8da10ccf7becf444a591e832a34565ea6d584e4b

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
  await userModel.findBy;
  userRoute.get("/:_id", getUser);
};

exports.getAll = async (req, res) => {
  await userModel.find(function (err, docs) {
    if (err) return res.status(400).json("Error: " + err);
    if (docs) return res.json(docs);
    return res.status(404).json("Error: Not found");
  });
};

exports.getAllFriend = async (req, res) => {
  await relationshipModel.find(async function (err, docs) {
    if (err) return res.status(400).json("Error: " + err);
    if (docs) {
      const _listId = docs.map((e) => {
        if (
          (e.userId1 === req.params._id || e.userId2 === req.params._id) &&
          e.type === "friend"
        ) {
          return e.userId1 === req.params._id ? e.userId2 : e.userId1;
        }
      });
      await Promise.all(
        _listId.map(async (e) => {
          const model = await userModel.findById(e);
          return { userName: model.userName, avatar: model.avatar };
        })
      )
        .then((friends) => {
          console.log(friends);
          return res.json(friends);
        })
        .catch((err) => res.status(400).json("Error: " + err));
    }
  });
};

exports.getAllFile = async (req, res) => {
  await fileModel.find({ userId: req.params._id }, function (err, docs) {
    if (err) return res.status(400).json("Error: " + err);
    if (docs) {
      //console.log(docs);
      //return All file of User's status
      res.json(docs);
    }
  });
};

exports.updateAvatar = async (req, res) => {
  await userModel.findByIdAndUpdate(req.params._id, {
    avatar: req.body.url,
  });
  //username && email not update
  // let filteredBody = filterObj(req.body, "username", "email");

  // userUploadAvatar(req, res, function (err) {
  //   if (err) throw err;
  //   console.log(req.file.path);
  //   const drive = google.drive({
  //     version: "v3",
  //     auth: oAuth2Client,
  //   });

  //   const filemetadata = {
  //     name: req.file.filename,
  //     parents: [targetFolderId],
  //   };

  //   const media = {
  //     mimeType: req.file.mimetype,
  //     body: fs.createReadStream(req.file.path),
  //   };

  //   drive.files.create(
  //     { resource: filemetadata, media: media, fields: "id" },
  //     async (err, file) => {
  //       if (err) throw err;

  //       //delete the file image
  //       fs.unlinkSync(req.file.path);
  //       // update
  //       filteredBody.avatar = `https://drive.google.com/uc?id=${file.data.id}&export=download`;
  //       await userModel.findByIdAndUpdate(
  //         req.params._id,
  //         filteredBody,
  //         { new: true, runValidators: true },
  //         function (err, docs) {
  //           if (err) return res.status(400).json("Error: " + err);
  //           if (docs) return res.json(docs);
  //           return res.status(404).json("Error: Not found");
  //         }
  //       );
  //       console.log(`File id: ${file.data.id}`);
  //     }
  //   );
  // });
};

exports.updateNewUser = async (req, res) => {
  let user = await userModel.findById(req.params._id);
  user.data.number = req.body.number;
  user.data.address = req.body.address;
  user.data.gender = req.body.gender;

  await user.save();
  res.send(user);
};

exports.searchUser = async (req, res) => {
  await userModel
    .find()
    .select("userName avatar")
    .exec()
    .then((users) => {
      const list = users.filter((user) =>
        user.userName.includes(req.params.key)
      );
      res.send(list);
    })
    .catch((err) => res.status(400).send(err));
};
