import React, { useState } from "react";

import "../../app/asset/css/style.css";

import ForgotPassword from "../components/auth/forgotPassword";
import PanelAuth from "../components/auth/panelAuth";
import Banner from "../layout/auth/banner";

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
            <PanelAuth
              onClick2={onClick2}
              onClick4={onClick4}
              setOnClick1={setOnClick1}
              setOnClick2={setOnClick2}
              setOnClick3={setOnClick3}
              setOnClick4={setOnClick4}
            />
            <ForgotPassword />
          </ul>
        </nav>
      </header>

      <Banner
        onClick1={onClick1}
        onClick2={onClick2}
        onClick3={onClick3}
        onClick4={onClick4}
        setOnClick1={setOnClick1}
        setOnClick2={setOnClick2}
        setOnClick3={setOnClick3}
        setOnClick4={setOnClick4}
      />

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
