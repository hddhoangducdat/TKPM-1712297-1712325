import axios from "../../../api/server";
import history from "../../../../history";
import jwt from "jsonwebtoken";

export const getCurrentUser = (token) => async (dispatch) => {
  const response = await axios.get(`/api/authentication/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  dispatch({
    type: "GET_CURRENT_USER",
    payload: response.data,
  });
};

export const confirmEmail = (token) => async (dispatch) => {
  try {
    await axios.get("/api/authentication/user/confirm", {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({
      type: "REGISTER_SUCCESS",
    });
    history.push("/");
  } catch (err) {
    history.push("/");
  }
};

export const setCurrentUserAuthen = (token) => async (dispatch) => {
  if (token) {
    dispatch(getCurrentUser(token));
    const { _id } = jwt.decode(token);
    dispatch({
      type: "SET_CURRENT_USER_AUTHEN",
      payload: _id,
    });
  } else
    dispatch({
      type: "SET_CURRENT_USER_AUTHEN",
      payload: {},
    });
};
