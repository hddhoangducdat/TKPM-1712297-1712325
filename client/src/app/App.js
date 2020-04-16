import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import * as history from "history";

// Components

import authPage from "./components/auth/auth";
import homePage from "./components/home/home";

const App = () => {
  return (
    <Router history={history.createBrowserHistory()}>
      <Switch>
        <Route path="/" exact component={authPage} />
        <Route path="/home" exact component={homePage} />
      </Switch>
    </Router>
  );
};

export default App;
