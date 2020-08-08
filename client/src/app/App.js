import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

// Pages
import authPage from "./pages/auth";
import homePage from "./pages/home";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={authPage} />
          <Route auth="/home" exact component={homePage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
