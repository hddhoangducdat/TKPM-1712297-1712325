import React from "react";
import { Field, reduxForm } from "redux-form";
import { useSelector, connect } from "react-redux";
import { createAccount } from "../../store/actions";

const Verify = ({ handleSubmit, createAccount }) => {
  const { register, info, verify } = useSelector((state) => state.form);
  const { otp } = useSelector((state) => state.auth);
  const [check, setCheck] = React.useState(false);

  const onFormSubmit = () => {
    if (
      parseInt(otp) ===
      parseInt(
        verify.values.first +
          verify.values.second +
          verify.values.third +
          verify.values.fourth
      )
    ) {
      createAccount(register.values, info.values);
    } else {
      setCheck(true);
    }
  };

  return (
    <section id="two" className="main style2 left dark fullscreen">
      <div className="content box style2">
        <form onSubmit={handleSubmit(onFormSubmit)} id="wrapper">
          <div id="dialog">
            <h3>Please enter the 4-digit verification code we sent via SMS:</h3>
            <div id="form">
              <Field
                component="input"
                className="verify-code"
                type="text"
                maxLength="1"
                size="1"
                min="0"
                max="9"
                pattern="[0-9]{1}"
                name="first"
              />
              <Field
                component="input"
                className="verify-code"
                type="text"
                maxLength="1"
                size="1"
                min="0"
                max="9"
                pattern="[0-9]{1}"
                name="second"
              />
              <Field
                component="input"
                className="verify-code"
                type="text"
                maxLength="1"
                size="1"
                min="0"
                max="9"
                pattern="[0-9]{1}"
                name="third"
              />
              <Field
                component="input"
                className="verify-code"
                type="text"
                maxLength="1"
                size="1"
                min="0"
                max="9"
                pattern="[0-9]{1}"
                name="fourth"
              />

              {check ? (
                <div className="util-margin-top-small validation validation-open">
                  {"Wrong OTP"}
                </div>
              ) : (
                <div> </div>
              )}

              <button className="button secondary  button-finished">
                Finished
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default connect(null, { createAccount })(
  reduxForm({ form: "verify" })(Verify)
);
