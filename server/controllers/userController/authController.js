const userModel = require("../../models/userModel");
const {
  registerValidation,
  loginValidation,
} = require("../../middlewares/authValidation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const _ = require("lodash");

exports.requestChangePassword = async (req, res) => {
  let user = await userModel.findOne({
    "data.email": req.body.email,
  });
  if (!user) return res.status(400).send("This email haven't been registered");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  jwt.sign(
    {
      user: {
        _id: user._id,
        email: user.data.email,
      },
    },
    process.env.PASSWORD_SECRET,
    {
      expiresIn: "1h",
    },
    (err, emailToken) => {
      const urlConfirm = `http://localhost:3000/updatepassword/${emailToken}`;

      const mailOptions = {
        from: "DC<hddhoangducdat@gmail.com>",
        to: req.body.email,
        subject: "Your password update request",
        html: `<h1>Click the button to go to the update form</h1>
        <br />  <a href="${urlConfirm}">Confirm !!!</a>`,
      };

      transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
          res.status(401).send("Error occcured ", err);
        } else res.send(emailToken);
      });
    }
  );
};

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

  const user = new userModel({
    password: passwordHash,
    data: {
      fullName: req.body.fullName,
      avatar:
        "https://library.kissclipart.com/20181001/wbw/kissclipart-gsmnet-ro-clipart-computer-icons-user-avatar-4898c5072537d6e2.png",
      email: req.body.email,
    },
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  jwt.sign(
    {
      user,
    },
    process.env.EMAIL_SECRET,
    {
      expiresIn: "1h",
    },
    (err, emailToken) => {
      const urlConfirm = `http://localhost:3000/confirmation/${emailToken}`;

      const mailOptions = {
        from: "DC<hddhoangducdat@gmail.com>",
        to: req.body.email,
        subject: "Please confirm your password",
        html: `<h1>Hello ${req.body.fullName}, Click the button to continue your email confirmation</h1>
        <br />  <a href="${urlConfirm}">Confirm !!!</a>`,
      };

      transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
          res.status(401).send("Error occcured ", err);
        } else res.send(emailToken);
      });
    }
  );
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
