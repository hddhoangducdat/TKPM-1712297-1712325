import { combineReducers } from "redux";
import chatBox from "./chatBox";
import postForm from "./postForm";

const authReducer = combineReducers({
  chatBox,
  postForm,
});

export default authReducer;
