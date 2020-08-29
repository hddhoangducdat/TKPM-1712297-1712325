import axios from "../../../api/server";
import { saveNoti } from "../noti";

export const likeStatus = (status) => async (dispatch, getState) => {
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
    id: status._id,
  });
};
