import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import * as history from "history";

// Loading

import Loading from "./components/loading/loading";

// Components

import authPage from "./components/auth/auth";
import homePage from "./components/home/home";

const App = () => {
  return (
    <div>
      <Loading />

      <Router history={history.createBrowserHistory()}>
        <Switch>
          <Route path="/" exact component={authPage} />
          <Route path="/home" exact component={homePage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
