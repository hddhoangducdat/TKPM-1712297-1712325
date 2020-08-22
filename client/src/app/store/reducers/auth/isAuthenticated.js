import _ from "lodash";
import { SET_CURRENT_USER_AUTHEN } from "../../value";

export default (state = false, action) => {
  switch (action.type) {
    case SET_CURRENT_USER_AUTHEN: {
      return !_.isEmpty(action.payload);
    }
    default:
      return state;
  }
};
