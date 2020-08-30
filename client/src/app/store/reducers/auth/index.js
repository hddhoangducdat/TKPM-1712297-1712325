import { combineReducers } from "redux";
import user from "./user";
import isAuthenticated from "./isAuthenticated";
import id from "./id";
import submit from "./submit";
import otp from "./otp";
import socket from "./socket";
import file from "./file";

const authReducers = combineReducers({
  file,
  id,
  user,
  isAuthenticated,
  submit,
  otp,
  socket,
});

export default authReducers;
