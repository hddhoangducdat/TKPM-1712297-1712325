export default (state = {}, action) => {
  switch (action.type) {
    case "GET_LIST_USER":
      return action.payload;
    default:
      return state;
  }
};
