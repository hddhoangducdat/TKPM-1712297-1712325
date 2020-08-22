import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";

import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN_CLICK_1, LOGIN_CLICK_2 } from "../../store/value";

import { login } from "../../store/actions";

import Lottie from "react-lottie";
import * as animationData from "../../asset/json/9844-loading-40-paperplane.json";

const Login = ({ login, handleSubmit }) => {
  const [onLoginAction, setOnLoginAction] = useState(0);
  const [loading, setLoading] = useState(false);
  const { loginClick1, loginClick2, registerClick2 } = useSelector(
    (state) => state.utils.auth
  );
  const dispatch = useDispatch();
  const { submit } = useSelector((state) => state.auth);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const formSubmit = (propsForm) => {
    setOnLoginAction(onLoginAction + 1);

    if (loginClick1) {
      setLoading(true);
      login(propsForm, setLoading);
    }
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      {loginClick1 ? (
        <div className="form-action">
          <Field
            component="input"
            name="email"
            placeholder="Email"
            type="email"
          ></Field>
          <Field
            component="input"
            name="password"
            placeholder="Password"
            type="password"
            className="util-margin-bottom-small"
          ></Field>
        </div>
      ) : (
        <div></div>
      )}
      {submit === 1 ? (
        <div className="validation validation-open">{"Login Failed"}</div>
      ) : (
        <div></div>
      )}
      {registerClick2 ? (
        <div></div>
      ) : (
        <div>
          {loading ? (
            <Lottie options={defaultOptions} height={50} width={50} />
          ) : onLoginAction > 1 ? (
            <button
              className="button"
              onClick={() => {
                setTimeout(() => {
                  dispatch({ type: LOGIN_CLICK_1 });
                }, 1000);
                dispatch({ type: LOGIN_CLICK_2 });
              }}
            >
              Log In
            </button>
          ) : (
            <button
              className={loginClick2 ? "btn-action-login button" : "button"}
              onClick={() => {
                setTimeout(() => {
                  dispatch({ type: LOGIN_CLICK_1 });
                }, 1000);
                dispatch({ type: LOGIN_CLICK_2 });
              }}
            >
              Log In
            </button>
          )}
        </div>
      )}
    </form>
  );
};

export default connect(null, { login })(reduxForm({ form: "login" })(Login));
