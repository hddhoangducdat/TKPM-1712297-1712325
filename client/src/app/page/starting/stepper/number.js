import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;

export default function ValidationTextFields({ setChange, number, setNumber }) {
  const [validate, setValidate] = React.useState(false);
  const classes = useStyles();

  const onChangeNumber = ({ target: { value } }) => {
    if (value === "") setChange(false);
    else setChange(true);
    setNumber(value);
    if (vnf_regex.test(value)) {
      setValidate(true);
      setChange(false);
    } else {
      setValidate(false);
    }
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        {validate ? (
          <TextField
            onChange={onChangeNumber}
            id="standard-error-helper-text"
            label="Phone Number"
            value={number}
          />
        ) : (
          <TextField
            error
            onChange={onChangeNumber}
            id="standard-error-helper-text"
            label="Error"
            value={number}
          />
        )}
      </div>
    </form>
  );
}
