import { FRIEND_MANAGER_ON, FRIEND_MANAGER_OFF } from "../../../value";

export default (state = 0, action) => {
  switch (action.type) {
    case FRIEND_MANAGER_ON:
      return 1;

    case FRIEND_MANAGER_OFF:
      return 0;

    default:
      return state;
  }
};
