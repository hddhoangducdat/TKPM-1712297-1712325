import { combineReducers } from "redux";
import auth from "./auth";

const utilsReducer = combineReducers({
  auth,
});

export default utilsReducer;
