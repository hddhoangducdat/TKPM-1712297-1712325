import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

// Loading

// Components

import authPage from "./page/auth/auth";
import emailConfirm from "./page/email/emailConfirm";
import updatepassword from "./page/email/changePassword";
import homePage from "./page/home/home";
import loading from "./components/loading/loading";
import changePassword from "./page/email/changePassword";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={authPage} />
          <Route path="/loading" exact component={loading} />
          <Route path="/confirmation/:token" exact component={emailConfirm} />
          <Route
            path="/updatepassword/:token"
            exact
            component={changePassword}
          />
          <Route path="/home" exact component={homePage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
