import { combineReducers } from "redux";
import chatBox from "./chatBox";
import postForm from "./postForm";
import fileManager from "./fileManager";

const authReducer = combineReducers({
  chatBox,
  postForm,
  fileManager,
});

export default authReducer;
