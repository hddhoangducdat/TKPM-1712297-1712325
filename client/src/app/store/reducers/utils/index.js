import { combineReducers } from "redux";
import auth from "./auth";
import file from "./file";

const utilsReducer = combineReducers({
  file,
  auth,
});

export default utilsReducer;
