const Joi = require("@hapi/joi");

const registerValidation = (data) => {
  const Schema = Joi.object({
    fullName: Joi.string().min(3).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required(),
    rePassword: Joi.ref("password"),
  });

  return Schema.validate(data);
};

const loginValidation = (data) => {
  const Schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });

  return Schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
