import { RENDER_NOTI, RENDER_NOTI_ALL } from "../../value";

export default (state = [], action) => {
  switch (action.type) {
    case RENDER_NOTI:
      return [action.payload, ...state];

    case RENDER_NOTI_ALL:
      return action.payload;
    default:
      return state;
  }
};
