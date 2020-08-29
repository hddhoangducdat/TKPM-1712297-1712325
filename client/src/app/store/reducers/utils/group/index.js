import { GROUP_DETAIL_ON, GROUP_DETAIL_OFF } from "../../../value";

export default (state = 0, action) => {
  switch (action.type) {
    case GROUP_DETAIL_ON:
      return 1;

    case GROUP_DETAIL_OFF:
      return 0;

    default:
      return state;
  }
};
