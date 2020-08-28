import axios from "../../../api/server";
import { LIKE_STATUS } from "../../value";
import { saveNoti } from "../noti";

export const likeStatus = (status, index) => async (dispatch, getState) => {
  dispatch({ type: LIKE_STATUS, payload: { id: getState().auth.id, index } });
  if (status.from !== getState().auth.id) {
    const noti = {
      from: getState().auth.id,
      to: status.from,
      userName: getState().auth.user.userName,
      avatar: getState().auth.user.avatar,
      statusId: status._id,
      type: "like",
    };
    console.log(noti);
    dispatch(saveNoti(noti));
  }
  await axios.post(`/status/like/${getState().auth.id}`, {
    index,
    id: status._id,
  });
};
