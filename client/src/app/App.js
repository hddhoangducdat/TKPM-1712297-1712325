import React from "react";
import { Router, Route } from "react-router-dom";
import * as history from "history";

// Components

import homePage from "./components/home/home";
import login from "./components/login/login";
import register from "./components/register/register";

const App = () => {
  return (
    <Router history={history.createBrowserHistory()}>
      <Switch>
        <Route path="/home" exact component={homePage} />
        <Route path="/login" exact component={login} />
        <Route path="/register" exact component={register} />
      </Switch>
    </Router>
  );
};

export default App;
