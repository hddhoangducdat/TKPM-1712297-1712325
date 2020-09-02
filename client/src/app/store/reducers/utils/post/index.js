import { combineReducers } from "redux";
import group from "./group";
import friend from "./friend";
import deadline from "./deadline";
import submit from "./submit";
import invite from "./invite";
import deadline_file from "./fileDeadline";

const authReducer = combineReducers({
  group,
  friend,
  deadline,
  submit,
  invite,
  deadline_file,
});

export default authReducer;
