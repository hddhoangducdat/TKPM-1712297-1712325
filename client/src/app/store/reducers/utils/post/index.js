import { combineReducers } from "redux";
import group from "./group";

const authReducer = combineReducers({
  group,
});

export default authReducer;
