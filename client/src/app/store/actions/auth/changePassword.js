import axios from "../../../api/server";
import history from "../../../../history";

export const changePassword = ({ email }) => async (dispatch) => {
  if (!email) dispatch({ type: "FORM_BLANK" });
  else {
    try {
      await axios.post("/api/authentication/user/requestChangePassword", {
        email,
      });
      dispatch({
        type: "CONFIRM_EMAIL",
      });
    } catch (err) {
      dispatch({
        type: "REGISTER_FAILED",
      });
    }
  }
};

export const updatePassword = (formValues, token) => async (dispatch) => {
  try {
    await axios.patch("/api/authentication/user/updatePassword", formValues, {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({
      type: "UPDATE_SUCCESS",
    });
    history.push("/");
  } catch (err) {
    dispatch({
      type: "REGISTER_FAILED",
    });
    history.push("/");
  }
};
