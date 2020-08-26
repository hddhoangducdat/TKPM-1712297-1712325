import { ADD_DEADLINE, SUBMIT_FILE, GET_DEADLINE } from "../../value";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_DEADLINE:
      return [action.payload, ...state];

    case GET_DEADLINE:
      return action.payload;

    case SUBMIT_FILE:
      state[action.payload.stt] = action.payload.value;
      return state;

    default:
      return state;
  }
};
