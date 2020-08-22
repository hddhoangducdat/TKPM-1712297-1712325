import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import utils from "./utils";
import search from "./search";

const createReducer = (asyncReducers) =>
  combineReducers({
    form: formReducer,
    utils,
    auth,
    search,
    ...asyncReducers,
  });

export default createReducer;
