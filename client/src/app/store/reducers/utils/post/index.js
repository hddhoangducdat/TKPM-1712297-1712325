import { combineReducers } from "redux";
import group from "./group";
import friend from "./friend";
import deadline from "./deadline";
import submit from "./submit";

const authReducer = combineReducers({
  group,
  friend,
  deadline,
  submit,
});

export default authReducer;