import axios from "../../../api/server";

export const saveMessage = (id, messageObj) => async (dispatch) => {
  console.log(id);
  console.log(messageObj);
  await axios.patch("/message/save", {
    id,
    message: messageObj,
  });
};
