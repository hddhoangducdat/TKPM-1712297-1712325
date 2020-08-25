import {
  GET_FRIEND,
  ADD_FRIEND_TO_GROUP,
  REMOVE_FRIEND_FROM_GROUP,
} from "../../../value";

export default (state = [], action) => {
  switch (action.type) {
    case GET_FRIEND:
      return action.payload.map((m) => false);

    case ADD_FRIEND_TO_GROUP:
      state[action.payload] = true;
      return state;

    case REMOVE_FRIEND_FROM_GROUP:
      state[action.payload] = false;
      return state;

    default:
      return state;
  }
};
