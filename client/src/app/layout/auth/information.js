import React from "react";

const Information = () => {
  return (
    <section
      id="one"
      className="container-box main style2 right dark fullscreen"
    >
      <div class="content box style2">
        <header>
          <h2>Please give us some of your Information</h2>
        </header>

        <form className="form-action">
          <input placeholder="Full Name" type="text"></input>
          <input placeholder="Phone Number" type="text"></input>

          <div className="dropdown">
            <div className="select">
              <span>Select Gender</span>
              <i className="fa fa-chevron-left"></i>
            </div>
            <input type="hidden" name="gender" />
            <ul className="dropdown-menu">
              <li id="male">Male</li>
              <li id="female">Female</li>
            </ul>
          </div>

          <div className="dropdown util-margin-bottom-small">
            <div className="select">
              <span>Select Province</span>
              <i className="fa fa-chevron-left"></i>
            </div>
            <input type="hidden" name="gender" />
            <ul className="dropdown-menu">
              <li id="male">Male</li>
              <li id="female">Female</li>
            </ul>
          </div>

          <a href="#two" className="button primary button-signup">
            Confirm
          </a>
        </form>
      </div>
    </section>
  );
};

export default Information;
