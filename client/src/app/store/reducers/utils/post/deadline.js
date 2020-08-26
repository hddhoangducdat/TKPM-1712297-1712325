import { DEADLINE_ON, DEADLINE_OFF, DEADLINE_SAVE } from "../../../value";

export default (state = 0, action) => {
  switch (action.type) {
    case DEADLINE_ON:
      return 1;

    case DEADLINE_OFF:
      return 0;

    case DEADLINE_SAVE:
      return -1;

    default:
      return state;
  }
};
