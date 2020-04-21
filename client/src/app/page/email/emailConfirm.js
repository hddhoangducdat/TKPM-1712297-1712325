import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as bearLoading from "../../asset/json/loading/loading-bear.json";
import * as successful from "../../asset/json/loading/successful.json";

import { connect } from "react-redux";

// Actions

import { confirmEmail } from "../../store/actions/auth/user";

// CSS

import "../../css/emailConfirm/main.css";
import "../../css/emailConfirm/util.css";

const useStyles = makeStyles({
  root: {
    minWidth: 600,
    minHeight: 200,
    backgroundColor: "#292d3e",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 40,
  },
  pos: {
    marginBottom: 12,
  },
});

const EmailConfirm = ({ match, confirmEmail, submit }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  useEffect(() => {
    // console.log(props.match.params.token);
    confirmEmail(match.params.token);
  }, [1]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: submit === 4 ? successful.default : bearLoading.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="container">
      <FadeIn className="centered-email-confirm">
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              Sorry for the wait ...
            </Typography>

            <Typography component="div">
              <Lottie options={defaultOptions} height={300} width={300} />
            </Typography>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.auth.submit;
};

export default connect(mapStateToProps, { confirmEmail })(EmailConfirm);
