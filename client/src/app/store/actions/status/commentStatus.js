import axios from "../../../api/server";
import { saveNoti } from "../../actions";

export const commentStatus = (text, status, index) => async (
  dispatch,
  getState
) => {
  if (status.from !== getState().auth.id) {
    const noti = {
      from: getState().auth.id,
      to: status.from,
      userName: getState().auth.user.userName,
      avatar: getState().auth.user.avatar,
      statusId: status._id,
      type: "comment",
    };
    dispatch(saveNoti(noti));
  }
  await axios.post(`/status/comment/${getState().auth.id}`, {
    id: status._id,
    text,
  });
};
