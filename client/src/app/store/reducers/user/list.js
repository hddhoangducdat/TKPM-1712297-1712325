export default (state = {}, action) => {
  switch (action.type) {
    case "GET_USER_LIST":
      return action.payload;
    default:
      return state;
  }
};
