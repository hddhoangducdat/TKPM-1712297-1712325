import { POST_ON, POST_OFF, POST_SAVE } from "../../../value";

export default (state = 0, action) => {
  switch (action.type) {
    case POST_ON:
      return 1;

    case POST_OFF:
      return 0;

    case POST_SAVE:
      return 0;

    default:
      return state;
  }
};
