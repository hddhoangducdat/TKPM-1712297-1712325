import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import chat from "./chat";
import user from "./user";

const createReducer = (asyncReducers) =>
  combineReducers({
    form: formReducer,
    auth,
    chat,
    user,
    ...asyncReducers,
  });

export default createReducer;
