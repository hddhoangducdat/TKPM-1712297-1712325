import axios from "../../../api/server";
import { CONFIRM_EMAIL, REGISTER_FAILED } from "../../value";

export const register = (formValues, setLoading) => async (dispatch) => {
  try {
    await axios
      .post("/api/authentication/user/register", formValues)
      .then((response) => {
        dispatch({
          type: CONFIRM_EMAIL,
          payload: response.data.otp,
        });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    dispatch({
      type: REGISTER_FAILED,
    });
  }
};
