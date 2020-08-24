import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import utils from "./utils";
import search from "./search";
import chat from "./chat";
import status from "./status";
import noti from "./noti";

const createReducer = (asyncReducers) =>
  combineReducers({
    form: formReducer,
    utils,
    auth,
    search,
    chat,
    status,
    noti,
    ...asyncReducers,
  });

export default createReducer;
