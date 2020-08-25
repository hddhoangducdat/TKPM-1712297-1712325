import { combineReducers } from "redux";
import group from "./group";
import friend from "./friend";

const authReducer = combineReducers({
  group,
  friend,
});

export default authReducer;
