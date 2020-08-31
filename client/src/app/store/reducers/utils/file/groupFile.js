import { GET_GROUP_FILE } from "../../../value";

export default (state = 0, action) => {
  switch (action.type) {
    case GET_GROUP_FILE:
      return action.payload;

    default:
      return state;
  }
};
