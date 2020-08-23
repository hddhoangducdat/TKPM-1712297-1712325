import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import utils from "./utils";
import search from "./search";
import chat from "./chat";
import status from "./status";

const createReducer = (asyncReducers) =>
  combineReducers({
    form: formReducer,
    utils,
    auth,
    search,
    chat,
    status,
    ...asyncReducers,
  });

export default createReducer;
