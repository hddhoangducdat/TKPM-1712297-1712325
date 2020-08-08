import React from "react";
import history from "../../../history";
import { useSelector, useDispatch } from "react-redux";
import {
  LOGIN_CLICK_1,
  LOGIN_CLICK_2,
  REGISTER_CLICK_1,
  REGISTER_CLICK_2,
  PANEL_HIDE_BUTTON,
} from "../../store/value";

const Banner = () => {
  const {
    loginClick1,
    loginClick2,
    registerClick1,
    registerClick2,
  } = useSelector((state) => state.utils.auth);
  const dispatch = useDispatch();

  return (
    <section id="banner">
      <div className="inner">
        <h2>Connect</h2>
        <p
          className={
            loginClick2
              ? "header-action util-margin-bottom-small"
              : registerClick2
              ? "header-action util-margin-bottom-small"
              : "util-margin-bottom-small"
          }
        >
          Perfect place for your team
          <br />
          Try optimize your work and social life
        </p>
        <ul className="actions special">
          <li className="auth-form">
            {registerClick1 ? (
              <form className="form-action">
                <input placeholder="Email" type="email"></input>
                <input placeholder="Password" type="password"></input>
                <input
                  placeholder="Username"
                  className="util-margin-bottom-small"
                  type="username"
                ></input>
              </form>
            ) : (
              <div></div>
            )}
            {loginClick1 ? (
              <form className="form-action">
                <input placeholder="Email" type="email"></input>
                <input
                  placeholder="Password"
                  type="password"
                  className="util-margin-bottom-small"
                ></input>
              </form>
            ) : (
              <div></div>
            )}
            {loginClick2 ? (
              <div></div>
            ) : (
              <a
                href="#banner"
                className={
                  registerClick2
                    ? "button primary button-signup btn-action"
                    : "button primary button-signup"
                }
                onClick={() => {
                  setTimeout(() => {
                    dispatch({ type: REGISTER_CLICK_1 });
                  }, 1000);
                  dispatch({ type: REGISTER_CLICK_2 });
                }}
              >
                Get Started
              </a>
            )}
            {registerClick2 ? (
              <div></div>
            ) : (
              <a
                href="#banner"
                className={loginClick2 ? "btn-action-login button" : "button"}
                onClick={() => {
                  if (loginClick1) {
                    history.push("/home");
                  } else {
                    setTimeout(() => {
                      dispatch({ type: LOGIN_CLICK_1 });
                    }, 1000);
                    dispatch({ type: LOGIN_CLICK_2 });
                  }
                }}
              >
                Log In
              </a>
            )}
          </li>
        </ul>
      </div>
      <a
        href="#one"
        className="more scrolly"
        onClick={() => dispatch({ type: PANEL_HIDE_BUTTON })}
      >
        Login by Gmail
      </a>
    </section>
  );
};

export default Banner;
