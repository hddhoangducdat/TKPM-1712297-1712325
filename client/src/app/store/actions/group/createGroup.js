import axios from "../../../api/server";
import { ADD_GROUP } from "../../value";
import { saveNoti } from "../noti";

export const createGroup = (friend, file, name) => async (
  dispatch,
  getState
) => {
  const formData = new FormData();
  if (file) {
    formData.append("imageCover", file);
  }
  formData.append("groupName", name);
  formData.append("admin", getState().auth.id);
  friend.map((f) => {
    formData.append("member", f._id);
  });

  formData.append("member", getState().auth.id);

  axios({
    method: "post",
    url: "/group",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((response) => {
    dispatch({ type: ADD_GROUP, payload: response.data });
    friend.map((f) => {
      getState().auth.socket.emit("send-noti", {
        contain: response.data,
        to: f._id,
      });
      const noti = {
        from: getState().auth.id,
        to: f._id,
        userName: getState().auth.user.userName,
        avatar: getState().auth.user.avatar,
        name: response.data.name,
        type: "add-group",
      };
      dispatch(saveNoti(noti));
    });
  });
};
