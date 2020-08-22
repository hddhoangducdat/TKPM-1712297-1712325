import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PANEL_HIDE_BUTTON } from "../../store/value";
import Register from "../../components/auth/register";
import Login from "../../components/auth/login";

const Banner = () => {
  const { loginClick2, registerClick2 } = useSelector(
    (state) => state.utils.auth
  );
  const { submit } = useSelector((state) => state.auth);
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
            <Register />
            <Login />
          </li>
        </ul>
      </div>
      {submit !== 3 ? (
        <div></div>
      ) : (
        <a
          href="#one"
          className="more scrolly"
          onClick={() => dispatch({ type: PANEL_HIDE_BUTTON })}
        >
          Proceeding
        </a>
      )}
    </section>
  );
};

export default Banner;
