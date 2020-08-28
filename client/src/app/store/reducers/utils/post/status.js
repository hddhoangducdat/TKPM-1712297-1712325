import { STATUS_ON, STATUS_OFF } from "../../../value";

export default (state = 0, action) => {
  switch (action.type) {
    case STATUS_ON:
      return action.payload;

    case STATUS_OFF:
      return 0;

    default:
      return state;
  }
};
