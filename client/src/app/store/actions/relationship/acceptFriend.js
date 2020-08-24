import axios from "../../../api/server";
import { SEARCH_RELATIONSHIP } from "../../value";

export const acceptFriend = (user, index) => async (dispatch, getState) => {
  await axios.patch(`/relationship/acceptRequest`, {
    id1: user._id,
    id2: getState().auth.id,
  });

  dispatch({
    type: SEARCH_RELATIONSHIP,
    payload: {
      stt: index,
      relationship: "friend",
    },
  });

  const noti = {
    from: getState().auth.id,
    to: user._id,
    userName: getState().auth.user.userName,
    avatar: getState().auth.user.avatar,
    type: "accept",
  };
  getState().auth.socket.emit("send-noti", noti);
  // dispatch({type: UPDATE_NOTI_ACCEPT, payload: })
};
