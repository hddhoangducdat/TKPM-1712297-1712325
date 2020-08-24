import axios from "../../../api/server";
import { SEARCH_RELATIONSHIP } from "../../value";

export const addFriend = (user, index) => async (dispatch, getState) => {
  await axios.post("/relationship/add", {
    host: getState().auth.id,
    toUser: user._id,
  });

  dispatch({
    type: SEARCH_RELATIONSHIP,
    payload: {
      stt: index,
      relationship: "pending",
    },
  });

  const noti = {
    from: getState().auth.id,
    to: user._id,
    userName: getState().auth.user.userName,
    avatar: getState().auth.user.avatar,
    type: "add",
  };
  getState().auth.socket.emit(`send-noti`, noti);
};
