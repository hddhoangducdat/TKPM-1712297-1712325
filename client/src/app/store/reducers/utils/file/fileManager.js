import { FILE_MANAGER_ON, FILE_MANAGER_OFF } from "../../../value";

export default (state = 0, action) => {
  switch (action.type) {
    case FILE_MANAGER_ON:
      return 1;

    case FILE_MANAGER_OFF:
      return 0;

    default:
      return state;
  }
};
