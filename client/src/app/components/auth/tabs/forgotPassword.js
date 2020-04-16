import React from "react";

// CSS

import "../../../css/auth/main.css";
import "../../../css/auth/util.css";

const login = () => {
  return (
    <form className="contact100-form validate-form">
      <span className="contact100-form-title">WE'RE HERE TO HELP</span>

      <div
        className="wrap-input100 validate-input"
        data-validate="Please enter your name"
      >
        <input
          className="input100"
          type="text"
          name="name"
          placeholder="We need your email address"
        />
        <span className="focus-input100"></span>
      </div>

      <div className="container-contact100-form-btn">
        <button className="contact100-form-btn">
          <span>
            <i className="fa fa-paper-plane-o m-r-6" aria-hidden="true"></i>
            Let's start
          </span>
        </button>
      </div>
    </form>
  );
};

export default login;