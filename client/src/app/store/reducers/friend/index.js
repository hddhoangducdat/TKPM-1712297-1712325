import { GET_FRIEND } from "../../value";

export default (state = [], action) => {
  switch (action.type) {
    case GET_FRIEND:
      return action.payload;

    default:
      return state;
  }
};
