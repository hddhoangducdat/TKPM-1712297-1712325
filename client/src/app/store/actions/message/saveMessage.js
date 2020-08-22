import axios from "../../../api/server";

export const saveMessage = (id, messageObj) => async (dispatch) => {
  await axios.patch("/message/save", {
    id,
    message: messageObj,
  });
};
