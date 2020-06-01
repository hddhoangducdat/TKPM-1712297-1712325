import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import chat from "./chat";
import user from "./user";
import request from "./request";

const createReducer = (asyncReducers) =>
  combineReducers({
    form: formReducer,
    auth,
    chat,
    user,
    request,
    ...asyncReducers,
  });

export default createReducer;
