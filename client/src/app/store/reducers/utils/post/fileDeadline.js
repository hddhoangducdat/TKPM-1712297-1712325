import { DEADLINE_FILE_ON, DEADLINE_FILE_OFF } from "../../../value";

const initialState = {
  flag: 0,
  idx: -1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DEADLINE_FILE_ON:
      return { flag: 1, idx: action.payload };
    case DEADLINE_FILE_OFF:
      return { flag: 0, idx: -1 };
    default:
      return state;
  }
};
