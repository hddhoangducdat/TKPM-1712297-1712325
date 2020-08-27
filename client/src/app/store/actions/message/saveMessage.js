import axios from "../../../api/server";
import { saveNotiMessage, saveNotiSelfMessage } from "../../actions";

export const saveMessage = (id, messageObj) => async (dispatch, getState) => {
  dispatch(saveNotiSelfMessage(id, messageObj.text, messageObj.type));
  getState().chat.member.forEach((m) => {
    if (m !== getState().auth.id) {
      dispatch(saveNotiMessage(id, m, messageObj.text, messageObj.type));
    }
  });

  // console.log(messageObj);
  await axios.patch("/message/save", {
    id,
    message: messageObj,
  });
};
