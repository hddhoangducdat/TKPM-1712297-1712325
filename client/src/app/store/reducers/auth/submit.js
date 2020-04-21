export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_FAILED":
      return 1;

    case "REGISTER_FAILED":
      return 2;

    case "CONFIRM_EMAIL":
      return 3;

    case "REGISTER_SUCCESS":
      return 4;

    case "UPDATE_SUCCESS":
      return 5;

    case "FORM_BLANK":
      return 0;

    default:
      return state;
  }
};
