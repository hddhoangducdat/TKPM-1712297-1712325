import {
  UPDATE_AVATAR,
  ADD_GROUP,
  SEEN_MESSAGE,
  UPDATE_MESSAGE_NOTI,
  UPDATE_MESSAGE_NOTI_SELF,
  RENDER_NOTI,
  SEEN_NOTI,
  ADD_STATUS,
  LIKE_STATUS,
  UNLIKE_STATUS,
} from "../../value";

export default (state = {}, action) => {
  switch (action.type) {
    case "GET_CURRENT_USER":
      return action.payload;
    case "USER_DATA_UPDATE":
      return { ...state, data: action.payload.data };

    case ADD_STATUS:
      state.status = [{ id: action.payload, like: false }, ...state.status];
      return state;

    case SEEN_NOTI:
      return { ...state, noti: state.noti - 1 };

    case RENDER_NOTI:
      return { ...state, noti: state.noti + 1 };

    case ADD_GROUP:
      return { ...state, chatBox: [action.payload, ...state.chatBox] };

    case SEEN_MESSAGE:
      return {
        ...state,
        chatBox: state.chatBox.map((c) => {
          if (c.id === action.payload) return { ...c, seen: true };
          else return c;
        }),
      };

    case UPDATE_MESSAGE_NOTI:
      return {
        ...state,
        chatBox: state.chatBox.map((c) => {
          if (c.id === action.payload.id)
            return { ...c, seen: false, noti: action.payload.noti };
          else return c;
        }),
      };

    case UPDATE_MESSAGE_NOTI_SELF:
      return {
        ...state,
        chatBox: state.chatBox.map((c) => {
          if (c.id === action.payload.id)
            return { ...c, seen: true, noti: action.payload.noti };
          else return c;
        }),
      };

    case UPDATE_AVATAR:
      return { ...state, avatar: action.payload };

    default:
      return state;
  }
};
