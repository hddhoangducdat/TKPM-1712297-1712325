import { combineReducers } from "redux";
import user from "./user";
import isAuthenticated from "./isAuthenticated";
import id from "./id";
import submit from "./submit";

const authReducers = combineReducers({
  id,
  user,
  isAuthenticated,
  submit,
});

export default authReducers;
