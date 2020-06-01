import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

// CSS
import "../../css/starting/starting.css";

// Action
import { updateNewUser } from "../../store/actions";

// Stepper
import Image from "./stepper/image";
import Gender from "./stepper/gender";
import Address from "./stepper/address";
import Number from "./stepper/number";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: "50%",
    top: "30%",
    left: "25%",
    "text-align": "center",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return [
    "Select your avatar",
    "Please let us know where you live",
    "Do you want to share your phone number",
    "Let us know your gender",
  ];
}

const Starting = ({ updateNewUser, userId }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [address, setAddress] = React.useState("Hà Nội");
  const [number, setNumber] = React.useState("");
  const [change, setChange] = React.useState(false);
  const [gender, setGender] = useState("female");
  const steps = getSteps();

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Image />;
      case 1:
        return <Address state={address} setState={setAddress} />;
      case 2:
        return (
          //   <input
          //     onChange={({ target: { value } }) => setNumber(value)}
          //     type="text"
          //     value={number}
          //     name="number"
          //   />
          <Number setNumber={setNumber} number={number} setChange={setChange} />
        );
      case 3:
        return <Gender value={gender} setValue={setGender} />;
      default:
        return "Unknown step";
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinish = () => {
    updateNewUser(userId, address, number, gender);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  {activeStep === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleFinish}
                      className={classes.button}
                    >
                      Finish
                    </Button>
                  ) : (
                    <Button
                      disabled={change}
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      Next
                    </Button>
                  )}
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.id,
  };
};

export default connect(mapStateToProps, { updateNewUser })(Starting);
