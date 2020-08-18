const userModel = require("../../models/userModel");

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
  send;
};

exports.getAll = async (req, res) => {
  await userModel.find(function (err, docs) {
    if (err) return res.status(400).json("Error: " + err);
    if (docs) return res.json(docs);
    return res.status(404).json("Error: Not found");
  });
};

exports.updateNewUser = async (req, res) => {
  let user = await userModel.findById(req.params.id);
  user.data.number = req.body.number;
  user.data.address = req.body.address;
  user.data.gender = req.body.gender;

  await user.save();
  res.send(user);
};
