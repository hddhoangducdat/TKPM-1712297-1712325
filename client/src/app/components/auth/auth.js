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

// CSS
import "../../css/auth/auth.css";
import logo from "../../asset/img/Logo2.png";

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

const Auth = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="split-left left">
        <div className="centered">
          <img src={logo} alt="" />
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
                <Login />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Register />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <ForgotPassword />
              </TabPanel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
