import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import nested from "../../utils/nested";

const Validation = ({ onRegisterAction }) => {
  const [ini, setIni] = useState(true);
  const [ktra, setKtra] = useState(-2);
  const { email, password, userName } = useSelector((state) =>
    nested(state.form.register, "values")
      ? {
          email: nested(state.form.register.values, "email")
            ? state.form.register.values.email
            : "",
          userName: nested(state.form.register.values, "userName")
            ? state.form.register.values.userName
            : "",
          password: nested(state.form.register.values, "password")
            ? state.form.register.values.password
            : "",
        }
      : { email: "", password: "", userName: "" }
  );
  const { submit } = useSelector((state) => state.auth);

  const arr = [
    "***@gmail.com",
    "contain number & character (at least 8)",
    "please fill the form",
  ];

  const onValidation = () => {
    if (
      email !== "" &&
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      return 0;
    } else if (
      password !== "" &&
      !/^(?=.*\d)(?=.*[a-z]).{8,14}$/.test(password)
    ) {
      return 1;
    }

    if (
      onRegisterAction > 1 &&
      (email === "" || password === "" || userName === "")
    ) {
      return 2;
    }

    if (ini) {
      setIni(false);
      return -2;
    }

    return -1;
  };

  useEffect(() => {
    setKtra(onValidation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password, userName]);

  return (
    <div>
      {submit === 2 ? (
        <div className="validation validation-open">
          {"Account already existed"}
        </div>
      ) : ktra === -2 ? (
        <div></div>
      ) : ktra !== -1 ? (
        <div className="validation validation-open">{arr[ktra]}</div>
      ) : (
        <div className="validation validation-close">{arr[ktra]}</div>
      )}
    </div>
  );
};

export default Validation;
