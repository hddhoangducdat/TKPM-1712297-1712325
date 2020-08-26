import {
  DEADLINE_SUBMIT_ON,
  DEADLINE_SUBMIT_OFF,
  DEADLINE_SUBMIT_SAVE,
} from "../../../value";

export default (state = 0, action) => {
  switch (action.type) {
    case DEADLINE_SUBMIT_ON:
      return action.payload;

    case DEADLINE_SUBMIT_OFF:
      return 0;

    case DEADLINE_SUBMIT_SAVE:
      return 0;

    default:
      return state;
  }
};
