import axios from "../../../api/server";
import {
  SEARCH_RELATIONSHIP,
  UPDATE_NOTI_ACCEPT,
  ADD_GROUP,
} from "../../value";
import { saveNoti } from "../../actions";
import { updateNotiAccept } from "../noti";

export const acceptFriend = (user, index) => async (dispatch, getState) => {
  const response = await axios.patch(`/relationship/acceptRequest`, {
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

  dispatch(updateNotiAccept(user._id, getState().auth.id));

  const noti = {
    from: getState().auth.id,
    to: user._id,
    userName: getState().auth.user.userName,
    avatar: getState().auth.user.avatar,
    type: "accept",
  };
  dispatch(saveNoti(noti));
  dispatch({ type: UPDATE_NOTI_ACCEPT, payload: user._id });

  const { user1, user2 } = response.data;
  if (user1.name === getState().auth.user.userName) {
    dispatch({ type: ADD_GROUP, payload: user2 });
    getState().auth.socket.emit("send-noti", { contain: user1, to: user.from });
  } else {
    dispatch({ type: ADD_GROUP, payload: user1 });
    getState().auth.socket.emit("send-noti", { contain: user2, to: user.from });
  }
};

export const acceptFriendNoti = (user) => async (dispatch, getState) => {
  const response = await axios.patch(`/relationship/acceptRequest`, {
    id1: user.from,
    id2: user.to,
  });

  dispatch(updateNotiAccept(user.from, getState().auth.id));

  const noti = {
    from: getState().auth.id,
    to: user.from,
    userName: getState().auth.user.userName,
    avatar: getState().auth.user.avatar,
    type: "accept",
  };
  dispatch(saveNoti(noti));
  dispatch({ type: UPDATE_NOTI_ACCEPT, payload: user.from });

  const { user1, user2 } = response.data;
  if (user1.name === getState().auth.user.userName) {
    dispatch({ type: ADD_GROUP, payload: user2 });
    getState().auth.socket.emit("send-noti", { contain: user1, to: user.from });
  } else {
    dispatch({ type: ADD_GROUP, payload: user1 });
    getState().auth.socket.emit("send-noti", { contain: user2, to: user.from });
  }
};
