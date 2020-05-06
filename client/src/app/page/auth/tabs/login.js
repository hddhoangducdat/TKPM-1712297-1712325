import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// CSS

import "../../../css/auth/main.css";
import "../../../css/auth/util.css";
import "../../../css/auth/auth.css";

// Action

import { login as loginAction } from "../../../store/actions";

// JSON

import * as spinner from "../../../asset/json/loading/spinner.json";

// Functions

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Login = ({ loginAction, handleSubmit }) => {
  const classes = useStyles();
  const [button, setButton] = useState(false);

  const formSubmit = (formProps) => {
    setButton(true);
    loginAction(formProps, setButton);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: spinner.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // useEffect(() => {
  //   if (load === 0 || load === 1) setButton(false);
  // }, [load, button]);

  return (
    <div>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="contact100-form validate-form centered"
      >
        {/* <Card className={classes.root}>
          <CardContent> */}
        <span className="contact100-form-title">ARE YOU READY!!!</span>

        <div className="wrap-input100 validate-input" data-validate="*@*.*">
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
          data-validate="a-z, A-Z, 0-9"
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
        {!button ? (
          <div className="container-contact100-form-btn">
            <button className="contact100-form-btn">
              <span>
                <i className="fa fa-paper-plane-o m-r-6" aria-hidden="true"></i>
                Let's start
              </span>
            </button>
          </div>
        ) : (
          <Lottie options={defaultOptions} width="102px" height="102px" />
        )}
        {/* </CardContent>
        </Card> */}
      </form>
    </div>
  );
};

const exportReduxForm = reduxForm({ form: "login" })(Login);

export default connect(null, { loginAction })(exportReduxForm);
