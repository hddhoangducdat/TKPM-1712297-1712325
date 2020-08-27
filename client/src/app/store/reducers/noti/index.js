import {
  RENDER_NOTI,
  RENDER_NOTI_ALL,
  UPDATE_NOTI_ACCEPT,
  SEEN_NOTI,
} from "../../value";

export default (state = [], action) => {
  switch (action.type) {
    case RENDER_NOTI:
      return [action.payload, ...state];

    case SEEN_NOTI:
      return state.map((s) => {
        if (s._id === action.payload) return { ...s, seen: true };
        else return s;
      });

    case UPDATE_NOTI_ACCEPT:
      return state.map((s) => {
        if (s.from === action.payload && s.type === "add")
          return { ...s, type: "you-accept" };
        else return s;
      });

    case RENDER_NOTI_ALL:
      return action.payload;
    default:
      return state;
  }
};
