import axios from "../../../api/server";

export const saveNoti = (noti) => async (dispatch, getState) => {
  getState().auth.socket.emit(`send-noti`, noti);
  await axios.post("/noti/save", noti);
};
