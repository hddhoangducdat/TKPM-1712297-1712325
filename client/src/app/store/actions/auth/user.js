import axios from "../../../api/server";
import history from "../../../../history";
import { login } from "./login";
import jwt from "jsonwebtoken";

export const getCurrentUser = (token) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/authentication/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({
      type: "GET_CURRENT_USER",
      payload: response.data,
    });
  } catch (err) {}
};

export const createAccount = (register, info) => async (dispatch) => {
  try {
    await axios
      .post("/api/authentication/user/create", {
        email: register.email,
        password: register.password,
        userName: register.userName,
        fullName: info.fullName,
        phoneNumber: info.phoneNumber,
        gender: info.gender,
        address: info.address,
      })
      .then(() => {
        dispatch({
          type: "REGISTER_SUCCESS",
        });
        dispatch(
          login({
            email: register.email,
            password: register.password,
          })
        );
      });
  } catch (err) {
    console.log(err);
  }
};

export const setCurrentUserAuthen = (token) => async (dispatch, state) => {
  if (token) {
    dispatch(getCurrentUser(token)).then(() => {
      const { _id } = jwt.decode(token);
      dispatch({
        type: "SET_CURRENT_USER_AUTHEN",
        payload: _id,
      });

      history.push("/home");
    });
  } else
    dispatch({
      type: "SET_CURRENT_USER_AUTHEN",
      payload: {},
    });
};
