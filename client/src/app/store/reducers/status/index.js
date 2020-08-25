import { SAVE_STATUS, EMPTY_STATUS } from "../../value";

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_STATUS:
      return [action.payload, ...state];

    case EMPTY_STATUS:
      return [];

    default:
      return state;
  }
};
