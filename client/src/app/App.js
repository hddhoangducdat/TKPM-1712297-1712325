import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

// Pages
import authPage from "./pages/auth";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={authPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
