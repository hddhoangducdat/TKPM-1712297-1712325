import { GET_CHATBOX_DATA, RENDER_MESSAGE } from "../../value";

export default (state = [], action) => {
  switch (action.type) {
    case GET_CHATBOX_DATA:
      return action.payload.message;

    case RENDER_MESSAGE:
      return [...state, action.payload];

    default:
      return state;
  }
};
