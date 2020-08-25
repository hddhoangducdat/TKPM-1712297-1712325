import { ADD_GROUP, GET_GROUP } from "../../value";

export default (state = [], action) => {
  switch (action.type) {
    case GET_GROUP:
      return action.payload;

    case ADD_GROUP:
      return [action.payload, ...state];

    default:
      return state;
  }
};
