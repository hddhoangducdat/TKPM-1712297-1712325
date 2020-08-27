import axios from "../../../api/server";

export const saveNotiMessage = (id, userId, text, type) => async (
  dispatch,
  getState
) => {
  const userName = getState().auth.user.userName;
  const noti =
    type === "picture"
      ? `${userName} send you a picture`
      : type === "file"
      ? `${userName} send you a file`
      : text;
  getState().auth.socket.emit("send-noti", { noti, id, to: userId });
  await axios.patch(`/message/noti/${userId}`, {
    id,
    noti,
  });
};
