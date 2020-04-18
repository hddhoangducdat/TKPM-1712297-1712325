import _ from "lodash";

export default (state = false, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER_AUTHEN": {
      return !_.isEmpty(action.payload);
    }
    default:
      return state;
  }
};
