import axios from "../../../api/server";
import { setCurrentUserAuthen } from "./user";

export const login = (formValues, setLoading) => async (dispatch) => {
  try {
    const response = await axios
      .post("/api/authentication/user/login", formValues)
      .then((response) => {
        if (setLoading) {
          setLoading(false);
        }
        const { token } = response.data;
        localStorage.setItem("jwtToken", token);
        dispatch(setCurrentUserAuthen(token));
      });
  } catch (err) {
    if (setLoading) {
      setLoading(false);
    }
    dispatch({
      type: "LOGIN_FAILED",
    });
  }
};
