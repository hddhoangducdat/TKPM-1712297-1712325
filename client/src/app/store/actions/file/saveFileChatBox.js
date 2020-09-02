import axios from "../../../api/server";
import { RENDER_MESSAGE } from "../../value";
import { saveMessage } from "../../actions";
// import io from "socket.io-client";
// import socket from "../../reducers/chat/socket";

export const saveFileChatBox = (file) => async (dispatch, getState) => {
  console.log(file);
  // const ENDPOINT = "/";
  // let socket;
  const arr = file.fileName.split(".");

  const messageObj = {
    type:
      arr[arr.length - 1] === "jpeg"
        ? "picture"
        : arr[arr.length - 1] === "jpg"
        ? "picture"
        : arr[arr.length - 1] === "png"
        ? "picture"
        : arr[arr.length - 1] === "svg"
        ? "picture"
        : "file",
    text: file.fileName,
    from: file.userId,
    url: file.fileUrl,
    avatar: getState().auth.user.avatar,
    userName: getState().auth.user.userName,
  };

  dispatch(saveMessage(getState().chat.id, messageObj));

  getState().chat.socket.emit(
    "send-message",
    {
      id: getState().chat.id,
      messageObj,
    },
    () => {}
  );
};
