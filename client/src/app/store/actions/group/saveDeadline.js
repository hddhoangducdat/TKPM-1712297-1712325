import axios from "../../../api/server";
import { ADD_DEADLINE } from "../../value";
import { saveNoti } from "../../actions";

export const saveDeadline = (title, description, timeEnd, file) => async (
  dispatch,
  getState
) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("timeEnd", timeEnd);
  formData.append("file", file[0].file);
  formData.append("groupId", getState().group._id);

  axios({
    method: "post",
    url: "/deadline",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((response) => {
      dispatch({ type: ADD_DEADLINE, payload: response.data });
      getState().group.data.member((id) => {
        const noti = {
          from: getState().auth.id,
          to: id,
          userName: getState().auth.user.userName,
          avatar: getState().auth.user.avatar,
          type: "deadline-create",
        };
        dispatch(saveNoti(noti));
        getState().socket.emit("send-noti", noti);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
