import { LOGIN_CLICK_2, REGISTER_CLICK_2 } from "../../../value";

export default (state = false, action) => {
  switch (action.type) {
    case REGISTER_CLICK_2:
      return true;

    case LOGIN_CLICK_2:
      return false;

    default:
      return state;
  }
};
