import axios from "../../../api/server";
import { UPDATE_MESSAGE_NOTI_SELF } from "../../value";

export const saveNotiSelfMessage = (id, text, type) => async (
  dispatch,
  getState
) => {
  const noti =
    type === "picture"
      ? `You: send a picture`
      : type === "file"
      ? `You: send you a file`
      : `You: ${text}`;
  dispatch({ type: UPDATE_MESSAGE_NOTI_SELF, payload: { noti, id } });
  await axios.patch(`/message/noti/self/${getState().auth.id}`, {
    id,
    noti,
  });
};
