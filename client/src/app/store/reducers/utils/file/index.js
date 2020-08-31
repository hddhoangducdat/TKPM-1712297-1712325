import { combineReducers } from "redux";
import chatBox from "./chatBox";
import postForm from "./postForm";
import fileManager from "./fileManager";
import groupFile from "./groupFile";

const authReducer = combineReducers({
  chatBox,
  postForm,
  groupFile,
  fileManager,
});

export default authReducer;
