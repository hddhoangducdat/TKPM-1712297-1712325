import { combineReducers } from "redux";
import user from "./user";
import isAuthenticated from "./isAuthenticated";
import id from "./id";
import submit from "./submit";
import otp from "./otp";
import socket from "./socket";

const authReducers = combineReducers({
  id,
  user,
  isAuthenticated,
  submit,
  otp,
  socket,
});

export default authReducers;
