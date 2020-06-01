import { combineReducers } from "redux";
import chatDialog from "./chatDialog";
import id from "./id";

const chatReducers = combineReducers({
  id,
  chatDialog,
});

export default chatReducers;
