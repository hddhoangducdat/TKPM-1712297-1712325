import axios from "../../../api/server";

export const saveNoti = (noti) => async (dispatch) => {
  await axios.post("/noti/save", noti);
};
