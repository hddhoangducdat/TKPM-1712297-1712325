import axios from "../../../api/server";
import { COMMENT_STATUS } from "../../value";
import { saveNoti } from "../../actions";

export const commentStatus = (text, status, index) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: COMMENT_STATUS,
    payload: {
      user: {
        userName: getState().auth.user.userName,
        avatar: getState().auth.user.avatar,
        _id: getState().auth.id,
        text,
      },
      index,
    },
  });
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
    index,
    id: status._id,
    text,
  });
};
