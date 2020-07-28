import React from "react";

const PanelAuth = ({
  onClick2,
  onClick4,
  setOnClick1,
  setOnClick2,
  setOnClick3,
  setOnClick4,
}) => {
  return (
    <li className="special">
      <a href="#banner" className="menuToggle">
        {onClick2 ? (
          <span
            onClick={() => {
              setOnClick1(false);
              setOnClick2(false);
              setTimeout(() => {
                setOnClick3(true);
              }, 1000);
              setOnClick4(true);
            }}
            className="button secondary button-signup button-color-blue util-margin-top-small"
          >
            Login
          </span>
        ) : onClick4 ? (
          <span
            onClick={() => {
              setOnClick4(false);
              setOnClick3(false);
              setTimeout(() => {
                setOnClick1(true);
              }, 1000);
              setOnClick2(true);
            }}
            className="button secondary button-signup button-color-blue util-margin-top-small"
          >
            Register
          </span>
        ) : (
          <div></div>
        )}
      </a>
    </li>
  );
};

export default PanelAuth;
