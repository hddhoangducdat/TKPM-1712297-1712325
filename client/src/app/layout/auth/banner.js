import React from "react";

const Banner = ({
  onClick1,
  onClick2,
  onClick3,
  onClick4,
  setOnClick1,
  setOnClick2,
  setOnClick3,
  setOnClick4,
}) => {
  return (
    <section id="banner">
      <div className="inner">
        <h2>Connect</h2>
        <p
          className={
            onClick2
              ? "header-action util-margin-bottom-small"
              : onClick4
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
            {onClick1 ? (
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
            {onClick3 ? (
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
            {onClick4 ? (
              <div></div>
            ) : (
              <a
                href="#banner"
                className={
                  onClick2
                    ? "button primary button-signup btn-action"
                    : "button primary button-signup"
                }
                onClick={() => {
                  setTimeout(() => {
                    setOnClick1(true);
                  }, 1000);
                  setOnClick2(true);
                }}
              >
                Get Started
              </a>
            )}
            {onClick2 ? (
              <div></div>
            ) : (
              <a
                href="#banner"
                className={onClick4 ? "btn-action-login button" : "button"}
                onClick={() => {
                  setTimeout(() => {
                    setOnClick3(true);
                  }, 1000);
                  setOnClick4(true);
                }}
              >
                Log In
              </a>
            )}
          </li>
        </ul>
      </div>
      <a href="#one" className="more scrolly">
        Login by Gmail
      </a>
    </section>
  );
};

export default Banner;
