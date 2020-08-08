import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import utils from "./utils";

const createReducer = (asyncReducers) =>
  combineReducers({
    form: formReducer,
    utils,
    auth,
    ...asyncReducers,
  });

export default createReducer;
