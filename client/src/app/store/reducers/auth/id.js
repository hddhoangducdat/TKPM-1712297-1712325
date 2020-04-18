export default (state = {}, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER_AUTHEN":
      return action.payload;

    default:
      return state;
  }
};
