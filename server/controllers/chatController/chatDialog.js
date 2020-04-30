const chatModel = require("../../models/chatModel");

exports.chatDialogCreate = async (req, res) => {
  const chatDialog = new chatModel({
    user1: req.body.id1,
    user2: req.body.id2,
    message: [],
  });
  await chatDialog.save();
  console.log(chatDialog);
  res.send(chatDialog);
};

exports.getChatDialog = async (req, res) => {
  const chatDialog1 = await chatModel
    .findOne({
      user1: req.query.user1,
      user2: req.query.user2,
    })
    .select("message _id");
  const chatDialog2 = await chatModel
    .findOne({
      user1: req.query.user2,
      user2: req.query.user1,
    })
    .select("message _id");
  if (!chatDialog1 && !chatDialog2) {
    return res.status(400).send("No data yet");
  } else if (!chatDialog1) {
    res.send(chatDialog2);
  } else {
    res.send(chatDialog1);
  }
};

exports.saveChatDialog = async (req, res) => {
  const chatDialog = await chatModel.findByIdAndUpdate(req.params.id, {
    message: req.body,
  });
  await chatDialog.save();
  res.send(chatDialog);
};
