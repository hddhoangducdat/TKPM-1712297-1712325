import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import utils from "./utils";
import search from "./search";
import chat from "./chat";
import noti from "./noti";
import friend from "./friend";
import group from "./group";
import deadline from "./deadline";

const createReducer = (asyncReducers) =>
  combineReducers({
    form: formReducer,
    deadline,
    group,
    utils,
    auth,
    search,
    chat,
    noti,
    friend,
    ...asyncReducers,
  });

export default createReducer;
