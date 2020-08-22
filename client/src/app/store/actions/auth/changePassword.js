import axios from "../../../api/server";
import history from "../../../../history";

export const changePassword = ({ email }, setButton) => async (dispatch) => {
  if (!email) dispatch({ type: "FORM_BLANK" });
  else {
    try {
      await axios
        .post("/api/authentication/user/requestChangePassword", {
          email,
        })
        .then(() => setButton(false));
      dispatch({
        type: "CONFIRM_EMAIL",
      });
    } catch (err) {
      dispatch({
        type: "CHANGE_PASSWORD_FAILED",
      });
      setButton(false);
    }
  }
};

export const updatePassword = (formValues, token, setButton) => async (
  dispatch
) => {
  try {
    await axios
      .patch("/api/authentication/user/updatePassword", formValues, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setButton(false));

    dispatch({
      type: "UPDATE_SUCCESS",
    });
    history.push("/");
  } catch (err) {
    dispatch({
      type: "REGISTER_FAILED",
    });
    // history.push("/");
  }
};
