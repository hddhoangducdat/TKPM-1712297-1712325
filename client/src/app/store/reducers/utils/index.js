import { combineReducers } from "redux";
import auth from "./auth";
import file from "./file";
import post from "./post";

const utilsReducer = combineReducers({
  file,
  auth,
  post,
});

export default utilsReducer;
