import { combineReducers } from "redux";
import loginClick1 from "./loginClick1";
import loginClick2 from "./loginClick2";
import registerClick1 from "./registerClick1";
import registerClick2 from "./registerClick2";
import panel from "./panel";

const authReducer = combineReducers({
  loginClick1,
  loginClick2,
  registerClick1,
  registerClick2,
  panel,
});

export default authReducer;
