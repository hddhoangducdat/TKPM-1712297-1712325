import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

// Pages
import authPage from "./pages/auth";
import mainPage from "./pages/main";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={authPage} />
          <Route auth="/home" exact component={mainPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
