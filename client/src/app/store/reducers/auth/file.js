import { GET_USER_FILE } from "../../value";

export default (state = [], action) => {
  switch (action.type) {
    case GET_USER_FILE:
      return action.payload;

    default:
      return state;
  }
};
