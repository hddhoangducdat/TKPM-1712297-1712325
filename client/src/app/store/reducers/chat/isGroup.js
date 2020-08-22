import { GET_CHATBOX_DATA } from "../../value";

export default (state = "", action) => {
  switch (action.type) {
    case GET_CHATBOX_DATA:
      return action.payload.isGroup;

    default:
      return state;
  }
};
