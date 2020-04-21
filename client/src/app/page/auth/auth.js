import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import FadeIn from "react-fade-in";

import { connect } from "react-redux";

// CSS
import "../../css/auth/auth.css";
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

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Auth = ({ submit }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [logo, setLogo] = React.useState(defaultLogo);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <div className={classes.root}>
          <AppBar className="tabs" position="static">
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="icon label tabs example"
            >
              <LinkTab icon={<PhoneIcon />} label="Login" {...a11yProps(0)} />
              <LinkTab
                icon={<FavoriteIcon />}
                label="Register"
                {...a11yProps(1)}
              />
              <LinkTab
                icon={<PersonPinIcon />}
                label="Forgot Password"
                {...a11yProps(2)}
              />
            </Tabs>
          </AppBar>
          <div className="below-tabs">
            <div className="centered">
              <TabPanel value={value} index={0}>
                <Login load={submit} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Register load={submit} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <ForgotPassword load={submit} />
              </TabPanel>
            </div>
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
