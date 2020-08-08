import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PANEL_SHOW_BUTTON } from "../../store/value";

import ForgotPassword from "../../components/auth/forgotPassword";
import PanelAuth from "../../components/auth/panelAuth";

const Header = () => {
  const { panel } = useSelector((state) => state.utils.auth);
  const dispatch = useDispatch();

  return (
    <header id="header" className="alt">
      <h1>
        <a
          href="#banner"
          className="scrolly"
          onClick={() => dispatch({ type: PANEL_SHOW_BUTTON })}
        >
          Connect
        </a>
      </h1>
      <nav id="nav">
        {panel ? (
          <ul>
            <PanelAuth />
            <ForgotPassword />
          </ul>
        ) : (
          <ul></ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
