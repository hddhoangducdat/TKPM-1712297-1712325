import { REGISTER_CLICK_1, LOGIN_CLICK_2 } from "../../../value";

export default (state = false, action) => {
  switch (action.type) {
    case REGISTER_CLICK_1:
      return true;

    case LOGIN_CLICK_2:
      return false;

    default:
      return state;
  }
};
