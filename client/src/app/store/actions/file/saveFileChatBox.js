import axios from "../../../api/server";
import { RENDER_MESSAGE } from "../../value";
import { saveMessage } from "../../actions";
// import io from "socket.io-client";
// import socket from "../../reducers/chat/socket";

export const saveFileChatBox = (file) => async (dispatch, getState) => {
  // const ENDPOINT = "localhost:5000";
  // let socket;

  const response = await axios.get(`file/${file._id}`);
  console.log(response.data);
  const messageObj = {
    type: response.data.type,
    text: response.data.fileName,
    from: response.data.userId,
    url: response.data.fileUrl,
  };
  // dispatch(
  //   saveMessage(getState().chat.id, {
  //     type: RENDER_MESSAGE,
  //     payload: messageObj,
  //   })
  // );

  getState().chat.socket.emit(
    "send-message",
    {
      id: getState().chat.id,
      messageObj,
    },
    () => {}
  );
};
