export default (state = [], action) => {
  switch (action.type) {
    case "GET_CHAT_DIALOG":
      return action.payload.message;

    case "SAVE_MESSAGE":
      return action.payload.message;

    case "CREATE_CHAT_DIALOG":
      return action.payload.message;

    default:
      return state;
  }
};
