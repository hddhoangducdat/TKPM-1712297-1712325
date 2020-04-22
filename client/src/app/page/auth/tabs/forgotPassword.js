import React, { useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Lottie from "react-lottie";

// Actions

import { changePassword } from "../../../store/actions";

// JSON

import * as spinner from "../../../asset/json/loading/spinner.json";

// CSS

import "../../../css/auth/main.css";
import "../../../css/auth/util.css";

const ForgotPassword = ({ changePassword, handleSubmit, load }) => {
  const [button, setButton] = useState(false);
  const formSubmit = (formProps) => {
    setButton(true);
    changePassword(formProps);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: spinner.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [disabled, setDisabled] = useState(false);

  const [validate, setValidate] = useState("wrap-input100 validate-input");

  const onChangeEmail = (e) => {
    const ktra = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (ktra.test(String(e.target.value).toLowerCase())) {
      setValidate("wrap-input100 validate-input");
      setDisabled(false);
    } else {
      setValidate("wrap-input100 validate-input alert-validate");
      setDisabled(true);
    }
  };

  useEffect(() => {
    if (load === 0 || load === 2 || load === 3) setButton(false);
  }, [load, button]);

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="contact100-form validate-form"
    >
      <span className="contact100-form-title">WE'RE HERE TO HELP</span>

      <div className={validate} data-validate="e@a.x">
        <Field
          onChange={onChangeEmail}
          className="input100"
          type="email"
          name="email"
          placeholder="We need your email address"
          component="input"
        />
        <span className="focus-input100"></span>
      </div>

      {!button ? (
        <div className="container-contact100-form-btn">
          {!disabled ? (
            <button className="contact100-form-btn">
              <span>
                <i className="fa fa-paper-plane-o m-r-6" aria-hidden="true"></i>
                CHANGE PASSWORD
              </span>
            </button>
          ) : (
            <button className="contact100-form-btn-disabled" disabled>
              <span>
                <i className="fa fa-paper-plane-o m-r-6" aria-hidden="true"></i>
                CHANGE PASSWORD
              </span>
            </button>
          )}
        </div>
      ) : (
        <Lottie options={defaultOptions} width="102px" height="102px" />
      )}
    </form>
  );
};

const exportReduxForm = reduxForm({ form: "forgotPassword" })(ForgotPassword);

export default connect(null, { changePassword })(exportReduxForm);
