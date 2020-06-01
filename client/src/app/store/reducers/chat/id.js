export default (state = {}, action) => {
  switch (action.type) {
    case "GET_CHAT_DIALOG":
      return action.payload._id;

    case "CREATE_CHAT_DIALOG":
      return action.payload._id;

    default:
      return state;
  }
};
