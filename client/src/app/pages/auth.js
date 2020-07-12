import React, { useState } from "react";

import "../../app/asset/css/style.css";

const Auth = () => {
  const [onClick1, setOnClick1] = useState(false);
  const [onClick2, setOnClick2] = useState(false);

  const [onClick3, setOnClick3] = useState(false);
  const [onClick4, setOnClick4] = useState(false);

  return (
    <div id="page-wrapper">
      <header id="header" className="alt">
        <h1>
          <a href="#banner" className="scrolly">
            Connect
          </a>
        </h1>
        <nav id="nav">
          <ul>
            <li className="special">
              <a href="#banner" className="menuToggle">
                {onClick2 ? (
                  <span
                    onClick={() => {
                      setOnClick1(false);
                      setOnClick2(false);
                      setTimeout(() => {
                        setOnClick3(true);
                      }, 1000);
                      setOnClick4(true);
                    }}
                    className="button secondary button-signup button-color-blue util-margin-top-small"
                  >
                    Login
                  </span>
                ) : onClick4 ? (
                  <span
                    onClick={() => {
                      setOnClick4(false);
                      setOnClick3(false);
                      setTimeout(() => {
                        setOnClick1(true);
                      }, 1000);
                      setOnClick2(true);
                    }}
                    className="button secondary button-signup button-color-blue util-margin-top-small"
                  >
                    Register
                  </span>
                ) : (
                  <div></div>
                )}
              </a>
            </li>
            <li className="special">
              <a href="#menu" className="menuToggle">
                <span className="button util-margin-top-small">
                  Forgot Password
                </span>
              </a>
              <div id="menu">
                <ul>
                  <li>
                    <a href="index.html">Please give us your </a>
                  </li>
                  <li>
                    <a href="generic.html">Generic</a>
                  </li>
                  <li>
                    <a href="elements.html">Elements</a>
                  </li>
                  <li>
                    <a href="#">Sign Up</a>
                  </li>
                  <li>
                    <a href="#">Log In</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </header>

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

      <section id="one" className="main style2 right dark fullscreen">
        <div class="content box style2">
          <header>
            <h2>What I Do</h2>
          </header>
          <p>
            Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore
            condimentum. Fusce blandit ultrices sapien, in accumsan orci rhoncus
            eu. Sed sodales venenatis arcu, id varius justo euismod in.
            Curabitur egestas consectetur magna.
          </p>
        </div>

        <a href="#two" class="more scrolly">
          Next
        </a>
      </section>

      <section id="two" className="main style2 left dark fullscreen">
        <div className="content box style2">
          <header>
            <h3>Who I Am</h3>
          </header>
          <p>
            Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore
            condimentum. Fusce blandit ultrices sapien, in accumsan orci rhoncus
            eu. Sed sodales venenatis arcu, id varius justo euismod in.
            Curabitur egestas consectetur magna.
          </p>
        </div>
        <a href="#banner" className="more scrolly">
          Next
        </a>
      </section>

      <footer id="footer">
        <ul className="icons">
          <li>
            <a href="#banner" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#banner" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#banner" className="icon brands fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#banner" className="icon brands fa-dribbble">
              <span className="label">Dribbble</span>
            </a>
          </li>
          <li>
            <a href="#banner" className="icon solid fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Untitled</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Auth;
