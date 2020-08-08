import { PANEL_HIDE_BUTTON, PANEL_SHOW_BUTTON } from "../../../value";

export default (state = true, action) => {
  switch (action.type) {
    case PANEL_SHOW_BUTTON:
      return true;
    case PANEL_HIDE_BUTTON:
      return false;
    default:
      return state;
  }
};
