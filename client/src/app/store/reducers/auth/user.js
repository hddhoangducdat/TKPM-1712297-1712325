import { UPDATE_AVATAR } from "../../value";

export default (state = {}, action) => {
  switch (action.type) {
    case "GET_CURRENT_USER":
      return action.payload;
    case "USER_DATA_UPDATE":
      return { ...state, data: action.payload.data };

    case UPDATE_AVATAR:
      return { ...state, avatar: action.payload };

    default:
      return state;
  }
};
