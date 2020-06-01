export default (state = {}, action) => {
  switch (action.type) {
    case "GET_CURRENT_USER":
      return action.payload;
    case "USER_DATA_UPDATE":
      return { ...state, data: action.payload.data };

    default:
      return state;
  }
};
