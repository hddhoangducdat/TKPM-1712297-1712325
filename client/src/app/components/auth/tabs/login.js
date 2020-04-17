import React from "react";
import { Field, reduxForm } from "redux-form";

// CSS

import "../../../css/auth/main.css";
import "../../../css/auth/util.css";
import "../../../css/auth/auth.css";

const login = () => {
  return (
    <form className="contact100-form validate-form">
      <span className="contact100-form-title">ARE YOU READY!!!</span>

      <div
        className="wrap-input100 validate-input"
        data-validate="Please enter your name"
      >
        <Field
          className="input100"
          type="text"
          name="email"
          placeholder="Email"
          component="input"
        />
        <span className="focus-input100"></span>
      </div>

      <div
        className="wrap-input100 validate-input"
        data-validate="Please enter your phone"
      >
        <Field
          className="input100"
          type="text"
          name="password"
          placeholder="Password"
          component="input"
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

export default reduxForm({ form: "login" })(login);
