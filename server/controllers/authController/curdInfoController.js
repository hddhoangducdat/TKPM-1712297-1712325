const userModel = require("../../models/userModel");
const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  jwt.verify(
    req.token,
    process.env.SECRET_TOKEN,
    async (err, authorizedData) => {
      if (err) {
        res.status(403).send("ERROR: Could not connect to the protected route");
      } else {
        const user = await userModel.findById(jwt.decode(req.token));

        if (user) res.send(user);
        else res.status(400).send("No user found");
      }
    }
  );
};
