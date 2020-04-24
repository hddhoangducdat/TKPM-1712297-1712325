import axios from "../../../api/server";

export const register = (formValues, setButton) => async (dispatch) => {
  if (!formValues.email) dispatch({ type: "FORM_BLANK" });
  else if (!formValues.fullName) dispatch({ type: "FORM_BLANK" });
  else if (!formValues.password) dispatch({ type: "FORM_BLANK" });
  else if (!formValues.rePassword) dispatch({ type: "FORM_BLANK" });
  else {
    try {
      await axios
        .post("/api/authentication/user/register", formValues)
        .then(() => setButton(false));
      dispatch({
        type: "CONFIRM_EMAIL",
      });
    } catch (err) {
      dispatch({
        type: "REGISTER_FAILED",
      });
      setButton(false);
    }
  }
};
