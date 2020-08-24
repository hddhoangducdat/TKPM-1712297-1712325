import { SET_NOTI_SOCKET } from "../../value";

export default (state = false, action) => {
  switch (action.type) {
    case SET_NOTI_SOCKET:
      return action.payload;

    default:
      return state;
  }
};
