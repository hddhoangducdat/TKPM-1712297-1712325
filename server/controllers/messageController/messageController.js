const messageModel = require("../model/messageModel");

exports.getMessage = async (req, res) => {
  await messageModel.findById(req.params._id, function (err, docs) {
    if (err) return res.status(403).send("Error when finding...");
    if (docs) return res.json(docs);
    return res.status(404).send("Not found");
  });
};

exports.deleteMessage = async (req, res) => {
  await messageModel.findByIdAndDelete(req.params._id, function (err, docs) {
    if (err) return res.status(400).json("Error: " + err);
    if (docs) return res.json(docs);
    return res.status(404).json("Error: Not Found!");
  });
};

exports.createMessage = async (req, res) => {
  const model = new messageModel({
    text: req.body.text,
    fromUser: req.body.userId,
    time: req.body.time,
    chatBox: req.body.chatBoxId,
  });

  try {
    if (!model["time"] instanceof Date) {
      throw "Error!";
    } else {
      await model.save();
      res.send(model._id);
    }
  } catch (error) {
    res.status(400).json("Error: " + error.message);
  }
};
