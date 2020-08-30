import { INVITE_ON, INVITE_OFF } from "../../../value";

export default (state = 0, action) => {
  switch (action.type) {
    case INVITE_ON:
      return 1;

    case INVITE_OFF:
      return 0;

    default:
      return state;
  }
};
