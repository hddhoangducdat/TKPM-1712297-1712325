import {
  PANEL_HIDE_BUTTON,
  PANEL_SHOW_BUTTON,
  DISABLE_ALL,
} from "../../../value";

export default (state = true, action) => {
  switch (action.type) {
    case PANEL_SHOW_BUTTON:
      return true;
    case PANEL_HIDE_BUTTON:
      return false;

    case DISABLE_ALL:
      return true;

    default:
      return state;
  }
};
