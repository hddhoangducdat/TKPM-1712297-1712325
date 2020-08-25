import { GET_GROUP_DETAIL, REMOVE_GROUP_DETAIL } from "../../value";

export default (state = false, action) => {
  switch (action.type) {
    case GET_GROUP_DETAIL:
      return action.payload;

    case REMOVE_GROUP_DETAIL:
      return false;

    default:
      return state;
  }
};
