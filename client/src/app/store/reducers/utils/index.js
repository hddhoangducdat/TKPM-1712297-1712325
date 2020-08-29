import { combineReducers } from "redux";
import auth from "./auth";
import file from "./file";
import post from "./post";
import status from "./status";
import group from "./group";

const utilsReducer = combineReducers({
  file,
  auth,
  post,
  status,
  group,
});

export default utilsReducer;
