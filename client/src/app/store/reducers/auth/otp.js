import { CONFIRM_EMAIL } from "../../value";

export default (state = {}, action) => {
  switch (action.type) {
    case CONFIRM_EMAIL:
      return action.payload;

    default:
      return state;
  }
};
