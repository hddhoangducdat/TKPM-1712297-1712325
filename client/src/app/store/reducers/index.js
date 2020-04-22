import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";

const createReducer = (asyncReducers) =>
  combineReducers({
    form: formReducer,
    auth,
    ...asyncReducers,
  });

export default createReducer;
