import React, { useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Lottie from "react-lottie";

// CSS

import "../../../css/auth/main.css";
import "../../../css/auth/util.css";

// JSON

import * as spinner from "../../../asset/json/loading/spinner.json";

// Action

import { register } from "../../../store/actions";

const Register = ({ register, handleSubmit, load }) => {
  const [button, setButton] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: spinner.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [validate, setValidate] = useState({
    fullName: "wrap-input100 validate-input",
    email: "wrap-input100 validate-input",
    password: "wrap-input100 validate-input",
    rePassword: "wrap-input100 validate-input",
  });

  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (validate.email === "wrap-input100 validate-input alert-validate")
      setDisabled(false);
    else if (
      validate.fullName === "wrap-input100 validate-input alert-validate"
    )
      setDisabled(false);
    else if (
      validate.password === "wrap-input100 validate-input alert-validate"
    )
      setDisabled(false);
    else if (
      validate.rePassword === "wrap-input100 validate-input alert-validate"
    )
      setDisabled(false);
    else setDisabled(true);
  }, [validate]);

  useEffect(() => {
    if (load === 0 || load === 2 || load === 3) setButton(false);
  });

  const onChangeFullName = (e) => {
    const ktra = /^[A-Za-z]\w{3,20}$/;
    if (String(e.target.value).match(ktra)) {
      setValidate({
        ...validate,
        fullName: "wrap-input100 validate-input",
      });
    } else {
      setValidate({
        ...validate,
        fullName: "wrap-input100 validate-input alert-validate",
      });
    }
  };

  const onChangeEmail = (e) => {
    const ktra = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (ktra.test(String(e.target.value).toLowerCase())) {
      setValidate({
        ...validate,
        email: "wrap-input100 validate-input",
      });
    } else {
      setValidate({
        ...validate,
        email: "wrap-input100 validate-input alert-validate",
      });
    }
  };

  const onChangeRePassword = (e) => {
    if (e.target.value === password) {
      setValidate({
        ...validate,
        rePassword: "wrap-input100 validate-input",
      });
    } else {
      setValidate({
        ...validate,
        rePassword: `wrap-input100 validate-input alert-validate`,
      });
    }
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    const ktra = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (String(e.target.value).match(ktra)) {
      setValidate({
        ...validate,
        password: "wrap-input100 validate-input",
      });
    } else {
      setValidate({
        ...validate,
        password: `wrap-input100 validate-input alert-validate`,
      });
    }
  };

  const formSubmit = (formProps) => {
    setButton(true);
    register(formProps);
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="contact100-form validate-form"
    >
      <span className="contact100-form-title">
        GET YOUR OWN PERSONAL's ACCOUNT
      </span>

      <div className={validate.fullName} data-validate="3-20 characters">
        <Field
          onChange={onChangeFullName}
          className="input100"
          type="text"
          name="fullName"
          placeholder="Your full name please"
          component="input"
        />
        <span className="focus-input100"></span>
      </div>

      <div className={validate.email} data-validate="e@a.x">
        <Field
          onChange={onChangeEmail}
          className="input100"
          type="text"
          name="email"
          placeholder="Email"
          component="input"
        />
        <span className="focus-input100"></span>
      </div>

      <div
        className={validate.password}
        data-validate="must have 0-9, a-z, A-Z"
      >
        <Field
          onChange={onChangePassword}
          className="input100"
          type="password"
          name="password"
          placeholder="Password (6 characters or more)"
          component="input"
        />
        <span className="focus-input100"></span>
      </div>

      <div className={validate.rePassword} data-validate="Not same as above">
        <Field
          onChange={onChangeRePassword}
          className="input100"
          type="password"
          name="rePassword"
          placeholder="Type your password again"
          component="input"
        />
        <span className="focus-input100"></span>
      </div>
      {!button ? (
        <div className="container-contact100-form-btn">
          {disabled ? (
            <button className="contact100-form-btn">
              <span>
                <i className="fa fa-paper-plane-o m-r-6" aria-hidden="true"></i>
                CREATE
              </span>
            </button>
          ) : (
            <button className="contact100-form-btn-disabled" disabled>
              <span>
                <i className="fa fa-paper-plane-o m-r-6" aria-hidden="true"></i>
                CREATE
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

const exportReduxForm = reduxForm({ form: "register" })(Register);

export default connect(null, { register })(exportReduxForm);
