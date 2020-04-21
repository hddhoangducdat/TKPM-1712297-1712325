import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";

import { connect } from "react-redux";

// Actions

import { updatePassword } from "../../store/actions";

// CSS

import "../../css/emailConfirm/main.css";
import "../../css/auth/main.css";
import "../../css/emailConfirm/util.css";

// JSON

const ChangePassword = ({ handleSubmit, updatePassword, match }) => {
  const [validate, setValidate] = useState({
    password: "wrap-input100 validate-input",
    rePassword: "wrap-input100 validate-input",
  });

  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [disabled, setDisabled] = useState(false);

  const formSubmit = (formProps) => {
    const token = match.params.token;
    updatePassword(formProps, token);
  };

  useEffect(() => {
    if (validate.password === "wrap-input100 validate-input alert-validate")
      setDisabled(true);
    else if (
      validate.rePassword === "wrap-input100 validate-input alert-validate"
    )
      setDisabled(true);
    else if (password === "") setDisabled(true);
    else if (rePassword === "") setDisabled(true);
    else setDisabled(false);
  }, [password, rePassword]);

  const onChangePassword = (e) => {
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
    setPassword(e.target.value);
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
    setRePassword(e.target.value);
  };

  return (
    <div className="container">
      <FadeIn className="centered-email-confirm">
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="contact100-form validate-form"
        >
          <span className="contact100-form-title">UPDATE YOUR PASSWORD</span>

          <div
            className={validate.password}
            data-validate="must have 0-9, a-z, A-Z"
          >
            <Field
              onChange={onChangePassword}
              className="input100"
              type="password"
              name="password"
              placeholder="Type your new password"
              component="input"
            />
            <span className="focus-input100"></span>
          </div>

          <div
            className={validate.rePassword}
            data-validate="Not same as above"
          >
            <Field
              onChange={onChangeRePassword}
              className="input100"
              type="password"
              name="rePassword"
              placeholder="Re-type here please"
              component="input"
            />
            <span className="focus-input100"></span>
          </div>

          <div className="container-contact100-form-btn">
            {!disabled ? (
              <button className="contact100-form-btn">
                <span>
                  <i
                    className="fa fa-paper-plane-o m-r-6"
                    aria-hidden="true"
                  ></i>
                  UPDATE
                </span>
              </button>
            ) : (
              <button className="contact100-form-btn-disabled" disabled>
                <span>
                  <i
                    className="fa fa-paper-plane-o m-r-6"
                    aria-hidden="true"
                  ></i>
                  UPDATE
                </span>
              </button>
            )}
          </div>
        </form>
      </FadeIn>
    </div>
  );
};

const exportReduxForm = reduxForm({ form: "ChangePassword" })(ChangePassword);

export default connect(null, { updatePassword })(exportReduxForm);
