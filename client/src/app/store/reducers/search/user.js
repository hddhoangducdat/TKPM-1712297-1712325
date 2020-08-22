import { SEARCH, SEARCH_RELATIONSHIP } from "../../value";

export default (state = [], action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload;

    case SEARCH_RELATIONSHIP:
      state[action.payload.stt] = {
        ...state[action.payload.stt],
        relationship: action.payload.relationship,
      };
      return state;

    default:
      return state;
  }
};
