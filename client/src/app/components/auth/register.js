import React, { useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { REGISTER_CLICK_1, REGISTER_CLICK_2 } from "../../store/value";
import Validation from "./validation";
import { Field, reduxForm } from "redux-form";
import { register } from "../../store/actions";

import Lottie from "react-lottie";
import * as animationData from "../../asset/json/9844-loading-40-paperplane.json";

const Register = ({ handleSubmit, register }) => {
  const [loading, setLoading] = useState(false);
  const [onRegisterAction, setOnRegisterAction] = useState(0);
  const { loginClick2, registerClick1, registerClick2 } = useSelector(
    (state) => state.utils.auth
  );
  const { submit } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const onRegister = () => {
    setTimeout(() => {
      dispatch({ type: REGISTER_CLICK_1 });
    }, 1000);
    dispatch({ type: REGISTER_CLICK_2 });
  };

  const formSubmit = (formProps) => {
    setOnRegisterAction(onRegisterAction + 1);

    if (onRegisterAction > 0 && submit !== 3) {
      setLoading(true);
      register(formProps, setLoading);
    }
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      {registerClick1 ? (
        <div className="form-action-container">
          <div className="form-action">
            <Field
              component="input"
              placeholder="Email"
              type="text"
              name="email"
            ></Field>
            <Field
              component="input"
              placeholder="Password"
              type="password"
              name="password"
            ></Field>
            <Field
              component="input"
              placeholder="Username"
              className="util-margin-bottom-small"
              type="text"
              name="userName"
            ></Field>
          </div>
          <Validation onRegisterAction={onRegisterAction} />
        </div>
      ) : (
        <div></div>
      )}
      {loginClick2 ? (
        <div></div>
      ) : (
        <div>
          {loading ? (
            <Lottie options={defaultOptions} height={50} width={50} />
          ) : onRegisterAction > 1 ? (
            <button
              className="button primary button-signup"
              onClick={() => onRegister()}
            >
              Get Started
            </button>
          ) : (
            <button
              className={
                registerClick2
                  ? "button primary button-signup btn-action button-margin"
                  : "button primary button-signup button-margin"
              }
              onClick={() => onRegister()}
            >
              Get Started
            </button>
          )}
        </div>
      )}
    </form>
  );
};

export default connect(null, { register })(
  reduxForm({ form: "register" })(Register)
);
