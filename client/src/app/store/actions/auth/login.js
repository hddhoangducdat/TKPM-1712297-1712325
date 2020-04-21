import axios from "../../../api/server";
import { setCurrentUserAuthen } from "./user";
import history from "../../../../history";

export const login = (formValues) => async (dispatch) => {
  if (!formValues.email) dispatch({ type: "FORM_BLANK" });
  else if (!formValues.password) dispatch({ type: "FORM_BLANK" });
  else {
    try {
      const response = await axios.post(
        "/api/authentication/user/login",
        formValues
      );

      const { token } = response.data;
      localStorage.setItem("jwtToken", token);
      dispatch(setCurrentUserAuthen(token));
      history.push("/home");
    } catch (err) {
      dispatch({
        type: "LOGIN_FAILED",
      });
    }
  }
};
