import { GROUP_ON, GROUP_OFF, GROUP_SAVE } from "../../../value";

export default (state = 0, action) => {
  switch (action.type) {
    case GROUP_ON:
      return 1;

    case GROUP_OFF:
      return 0;

    case GROUP_SAVE:
      return -1;

    default:
      return state;
  }
};
