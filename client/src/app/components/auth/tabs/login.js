import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

// CSS

import "../../../css/auth/main.css";
import "../../../css/auth/util.css";
import "../../../css/auth/auth.css";

// Action

import { login as loginAction } from "../../../store/actions";

// Functions

const login = ({ loginAction, handleSubmit }) => {
  const formSubmit = (formProps) => {
    loginAction(formProps);
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="contact100-form validate-form"
    >
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
          type="password"
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

const exportReduxForm = reduxForm({ form: "login" })(login);

export default connect(null, { loginAction })(exportReduxForm);
