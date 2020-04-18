import { combineReducers } from "redux";
import user from "./user";
import isAuthenticated from "./isAuthenticated";
import id from "./id";

const authReducers = combineReducers({
  id,
  user,
  isAuthenticated,
});

export default authReducers;
