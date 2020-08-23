import { SET_SOCKET } from "../../value";

export default (state = false, action) => {
  switch (action.type) {
    case SET_SOCKET:
      return action.payload;

    default:
      return state;
  }
};
