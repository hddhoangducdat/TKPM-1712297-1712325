export default (state = false, action) => {
  switch (action.type) {
    case "ADD_FRIEND":
      return action.payload;

    case "GET_FRIEND":
      return action.payload;

    case "ACCEPT_FRIEND":
      return false;
    case "CANCLE_FRIEND":
      return false;
    case "UNFRIEND":
      return false;

    default:
      return state;
  }
};
