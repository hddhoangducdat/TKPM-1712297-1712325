import { combineReducers } from "redux";
import isGroup from "./isGroup";
import member from "./member";
import message from "./message";
import id from "./id";
import socket from "./socket";

const messageReducers = combineReducers({
  isGroup,
  socket,
  member,
  message,
  id,
});

export default messageReducers;
