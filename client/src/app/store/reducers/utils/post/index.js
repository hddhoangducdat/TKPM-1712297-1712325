import { combineReducers } from "redux";
import group from "./group";
import friend from "./friend";
import deadline from "./deadline";
import submit from "./submit";
import status from "./status";

const authReducer = combineReducers({
  status,
  group,
  friend,
  deadline,
  submit,
});

export default authReducer;
