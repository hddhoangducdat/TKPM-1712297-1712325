import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import utils from "./utils";
import search from "./search";
import chat from "./chat";
import status from "./status";
import noti from "./noti";
import friend from "./friend";

const createReducer = (asyncReducers) =>
  combineReducers({
    form: formReducer,
    utils,
    auth,
    search,
    chat,
    status,
    noti,
    friend,
    ...asyncReducers,
  });

export default createReducer;
