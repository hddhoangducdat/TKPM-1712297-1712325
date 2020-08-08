import React from "react";

const Verify = () => {
  return (
    <section id="two" className="main style2 left dark fullscreen">
      <div className="content box style2">
        <div id="wrapper">
          <div id="dialog">
            <h3>Please enter the 4-digit verification code we sent via SMS:</h3>
            <div id="form">
              <input
                className="verify-code"
                type="text"
                maxLength="1"
                size="1"
                min="0"
                max="9"
                pattern="[0-9]{1}"
              />
              <input
                className="verify-code"
                type="text"
                maxLength="1"
                size="1"
                min="0"
                max="9"
                pattern="[0-9]{1}"
              />
              <input
                className="verify-code"
                type="text"
                maxLength="1"
                size="1"
                min="0"
                max="9"
                pattern="[0-9]{1}"
              />
              <input
                className="verify-code"
                type="text"
                maxLength="1"
                size="1"
                min="0"
                max="9"
                pattern="[0-9]{1}"
              />
              <a
                href="#banner"
                className="util-margin-top-small button secondary"
              >
                Finished
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verify;
