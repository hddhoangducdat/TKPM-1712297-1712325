import {
  CHAT_BOX_FILE_ON,
  CHAT_BOX_FILE_OFF,
  CHAT_BOX_FILE_SAVE,
} from "../../../value";

export default (state = { show: false, files: [] }, action) => {
  switch (action.type) {
    case CHAT_BOX_FILE_ON:
      return { show: true, files: [] };

    case CHAT_BOX_FILE_OFF:
      return { show: false, files: [] };

    case CHAT_BOX_FILE_SAVE:
      return { ...state, files: action.payload };

    default:
      return state;
  }
};
