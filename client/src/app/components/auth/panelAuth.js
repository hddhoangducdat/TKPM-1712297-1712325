import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  LOGIN_CLICK_1,
  LOGIN_CLICK_2,
  REGISTER_CLICK_2,
  REGISTER_CLICK_1,
} from "../../store/value";

const PanelAuth = () => {
  const { loginClick2, registerClick2 } = useSelector(
    (state) => state.utils.auth
  );
  const dispatch = useDispatch();

  return (
    <li className="special">
      <a href="#banner" className="menuToggle">
        {registerClick2 ? (
          <span
            onClick={() => {
              setTimeout(() => {
                dispatch({ type: LOGIN_CLICK_1 });
              }, 1000);
              dispatch({ type: LOGIN_CLICK_2 });
            }}
            className="button secondary button-signup button-color-blue util-margin-top-small"
          >
            Login
          </span>
        ) : loginClick2 ? (
          <span
            onClick={() => {
              setTimeout(() => {
                dispatch({ type: REGISTER_CLICK_1 });
              }, 1000);
              dispatch({ type: REGISTER_CLICK_2 });
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
