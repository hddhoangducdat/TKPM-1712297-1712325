import { SAVE_STATUS } from "../../value";

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_STATUS:
      return [action.payload, ...state];

    default:
      return state;
  }
};
