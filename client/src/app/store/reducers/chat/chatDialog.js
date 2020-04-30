export default (state = {}, action) => {
  switch (action.type) {
    case "GET_CHAT_DIALOG":
      return action.payload;

    case "SAVE_MESSAGE":
      return action.payload;

    case "CREATE_CHAT_DIALOG":
      return action.payload;

    default:
      return state;
  }
};
