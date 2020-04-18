const userModel = require("../../models/userModel");
const {
  registerValidation,
  loginValidation,
} = require("../../middlewares/authValidation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { error } = await registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let emailExist = await userModel.findOne({
    "data.email": req.body.email,
  });
  if (emailExist) return res.status(400).send("Email already exists !!!");

  let salt = await bcrypt.genSalt(10);
  let passwordHash = await bcrypt.hash(req.body.password, salt);

  const model = new userModel({
    password: passwordHash,
    data: {
      fullName: req.body.fullName,
      avatar:
        "https://library.kissclipart.com/20181001/wbw/kissclipart-gsmnet-ro-clipart-computer-icons-user-avatar-4898c5072537d6e2.png",
      email: req.body.email,
    },
  });

  try {
    const saveRegisterModel = await model.save();
    res.send(saveRegisterModel);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.login = async (req, res) => {
  const { error } = await loginValidation(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  }

  let user = await userModel.findOne({
    "data.email": req.body.email,
  });
  if (!user) return res.status(400).send("Wrong Email or Pasword !");

  let validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Wrong Email or Pasword !");

  const token = jwt.sign({ _id: user.id }, process.env.SECRET_TOKEN);
  res.header("auth-token", token);
  res.send({
    result: "Login sucessfully !",
    token,
  });
};
