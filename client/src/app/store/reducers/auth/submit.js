import {
  LOGIN_FAILED,
  REGISTER_FAILED,
  CONFIRM_EMAIL,
  REGISTER_SUCCESS,
  UPDATE_SUCCESS,
  DISABLE_ALL,
} from "../../value";

export default (state = {}, action) => {
  switch (action.type) {
    case DISABLE_ALL:
      return 0;

    case LOGIN_FAILED:
      return 1;

    case REGISTER_FAILED:
      return 2;

    case CONFIRM_EMAIL:
      return 3;

    case REGISTER_SUCCESS:
      return 4;

    case UPDATE_SUCCESS:
      return 5;

    default:
      return state;
  }
};
