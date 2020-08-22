import { SET_CURRENT_USER_AUTHEN, LOGIN_FAILED } from "../../value";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_USER_AUTHEN:
      return action.payload;

    case LOGIN_FAILED:
      return 1;

    default:
      return state;
  }
};
