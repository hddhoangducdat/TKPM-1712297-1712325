import { combineReducers } from "redux";
import isGroup from "./isGroup";
import member from "./member";
import message from "./message";

const messageReducers = combineReducers({
  isGroup,
  member,
  message,
});

export default messageReducers;
