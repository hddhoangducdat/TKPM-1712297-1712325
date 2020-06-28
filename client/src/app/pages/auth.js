import React from "react";

const Auth = () => {
  return (
    <div id="page-wrapper">
      <header id="header" class="alt">
        <h1>
          <a href="#banner" className="scrolly">
            Spectral
          </a>
        </h1>
      </header>

      <section id="banner">
        <div class="inner">
          <h2>Spectral</h2>
          <p>
            Another fine responsive
            <br />
            site template freebie
            <br />
            crafted by <a href="http://html5up.net">HTML5 UP</a>.
          </p>
          <ul class="actions special">
            <li>
              <a href="#" class="button primary">
                Activate
              </a>
            </li>
          </ul>
        </div>
        <a href="#one" class="more scrolly">
          Learn More
        </a>
      </section>

      <section id="one" class="main style2 right dark fullscreen">
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
        {/* <a href="#two" class="more scrolly">
          Next
        </a> */}
      </section>

      <section id="two" class="main style2 left dark fullscreen">
        <div class="content box style2">
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
        <a href="#banner" class="more scrolly">
          Next
        </a>
      </section>

      <footer id="footer">
        <ul class="icons">
          <li>
            <a href="#" class="icon brands fa-twitter">
              <span class="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon brands fa-facebook-f">
              <span class="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon brands fa-instagram">
              <span class="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon brands fa-dribbble">
              <span class="label">Dribbble</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon solid fa-envelope">
              <span class="label">Email</span>
            </a>
          </li>
        </ul>
        <ul class="copyright">
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
