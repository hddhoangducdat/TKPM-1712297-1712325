const chatModel = require("../../models/chatModel");
const userModel = require("../../models/userModel");

exports.chatDialogCreate = async (req, res) => {
  const chatDialog = new chatModel({
    message: [],
  });

  let result1 = await userModel.findById(req.body.id1);
  let result2 = await userModel.findById(req.body.id2);
  result1.data.chatBox = [
    ...result1.data.chatBox,
    {
      id: chatDialog._id,
      name: result2.data.fullName,
      avatar: result2.data.avatar,
      member: [result1._id, result2._id],
    },
  ];
  result2.data.chatBox = [
    ...result2.data.chatBox,
    {
      id: chatDialog._id,
      name: result1.fullName,
      avatar: result1.avatar,
      member: [result1._id, result2._id],
    },
  ];
  await result1.save();
  await result2.save();
  await chatDialog.save();
  res.send(chatDialog);
};

exports.getChatDialog = async (req, res) => {
  const chatDialog = await chatModel.findById(req.params.id);
  res.send(chatDialog);
};

exports.saveChatDialog = async (req, res) => {
  const chatDialog = await chatModel.findByIdAndUpdate(req.params.id, {
    message: req.body,
  });
  await chatDialog.save();
  res.send(chatDialog);
};
