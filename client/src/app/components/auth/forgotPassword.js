import React from "react";

const ForgotPassword = () => {
  return (
    <li className="special">
      <a href="#menu" className="menuToggle">
        <span className="button util-margin-top-small">Forgot Password</span>
      </a>
      <div id="menu">
        <ul>
          <li>
            <a href="#banner" className="util-center util-margin-bottom-small">
              GIVE US YOUR EMAIL ADDRESS
            </a>
          </li>
          <li>
            <form className="form-action">
              <input placeholder="Email" type="email"></input>
              <span className="button powerful button-signup button-color-blue util-margin-top-small">
                Submit
              </span>
            </form>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default ForgotPassword;
