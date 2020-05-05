import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeIn from "react-fade-in";

import { connect } from "react-redux";

// CSS
import "../../css/auth/auth.scss";
import "../../asset/fonts/font-awesome-4.7.0/css/font-awesome.min.css";

// Logo

import defaultLogo from "../../asset/img/logo/default.png";
import loginFailed from "../../asset/img/logo/loginFailed.png";
import existedEmail from "../../asset/img/logo/existedEmail.png";
import registerSuccessful from "../../asset/img/logo/registerSuccessful.png";
import checkEmail from "../../asset/img/logo/checkEmail.png";
import blankForm from "../../asset/img/logo/blankForm.png";
import updatePassword from "../../asset/img/logo/updatePassword.png";

// Tabs
import Login from "./tabs/login";
import Register from "./tabs/register";
import ForgotPassword from "./tabs/forgotPassword";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const Auth = ({ submit }) => {
  const [logo, setLogo] = React.useState(defaultLogo);

  React.useEffect(() => {
    if (submit === 1) setLogo(loginFailed);
    else if (submit === 2) setLogo(existedEmail);
    else if (submit === 3) setLogo(checkEmail);
    else if (submit === 4) setLogo(registerSuccessful);
    else if (submit === 0) setLogo(blankForm);
    else if (submit === 5) setLogo(updatePassword);
    else setLogo(defaultLogo);
  }, [submit]);

  return (
    <div>
      <div className="split-left left">
        <div className="centered">
          <FadeIn>
            <img src={logo} alt="" />
          </FadeIn>
          <h1>A Chat and Streaming Web for Education</h1>
        </div>
      </div>

      <div className="split-right right">
        <div class="tabs">
          <input type="radio" id="tab1" name="tab-control" defaultChecked />
          <input type="radio" id="tab2" name="tab-control" />
          <input type="radio" id="tab3" name="tab-control" />
          <ul>
            <li title="Features">
              <label for="tab1" role="button">
                <svg viewBox="0 0 24 24">
                  <path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10H20C20,13.32 17.32,16 14,16A6,6 0 0,1 8,10A6,6 0 0,1 14,4C14.43,4 14.86,4.05 15.27,4.14L16.88,2.54C15.96,2.18 15,2 14,2M20.59,3.58L14,10.17L11.62,7.79L10.21,9.21L14,13L22,5M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82Z" />
                </svg>
                <br />
                <span>Login</span>
              </label>
            </li>
            <li title="Delivery Contents">
              <label for="tab2" role="button">
                <svg viewBox="0 0 24 24">
                  <path d="M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z" />
                </svg>
                <br />
                <span>Register</span>
              </label>
            </li>
            <li title="Shipping">
              <label for="tab3" role="button">
                <svg viewBox="0 0 24 24">
                  <path d="M3,4A2,2 0 0,0 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8H17V4M10,6L14,10L10,14V11H4V9H10M17,9.5H19.5L21.47,12H17M6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5M18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5Z" />
                </svg>
                <br />
                <span>Forgot Password</span>
              </label>
            </li>
          </ul>

          <div class="slider">
            <div class="indicator"></div>
          </div>
          <div class="content">
            <section>
              <Login />
            </section>
            <section>
              <Register />
            </section>
            <section>
              <ForgotPassword />
            </section>
            <section>
              <h2>Returns</h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              dicta vero rerum? Eaque repudiandae architecto libero
              reprehenderit aliquam magnam ratione quidem? Nobis doloribus
              molestiae enim deserunt necessitatibus eaque quidem incidunt.
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    submit: state.auth.submit,
  };
};

export default connect(mapStateToProps)(Auth);