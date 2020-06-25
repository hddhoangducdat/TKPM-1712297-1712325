import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store";
// import { setCurrentUserAuthen } from "./app/store/actions";
import App from "./app/App";

// if (localStorage.jwtToken) {
//   store.dispatch(setCurrentUserAuthen(localStorage.jwtToken));
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
