import { combineReducers } from "redux";
import group from "./group";
import friend from "./friend";
import deadline from "./deadline";
import submit from "./submit";
import invite from "./invite";

const authReducer = combineReducers({
  group,
  friend,
  deadline,
  submit,
  invite,
});

export default authReducer;
