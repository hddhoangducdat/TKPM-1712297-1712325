import {
  GROUP_INVITE_ON,
  GROUP_INVITE_OFF,
  GROUP_INVITE_SAVE,
} from "../../../value";

export default (state = 0, action) => {
  switch (action.type) {
    case GROUP_INVITE_ON:
      return 1;
    case GROUP_INVITE_OFF:
      return 0;
    case GROUP_INVITE_SAVE:
      return -1;
    default:
      return state;
  }
};
