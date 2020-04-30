import { combineReducers } from "redux";
import chatDialog from "./chatDialog";

const chatReducers = combineReducers({
  chatDialog,
});

export default chatReducers;
