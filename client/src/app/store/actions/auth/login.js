import axios from "../../../api/server";
import jwt from "jsonwebtoken";
import setAuthorization from "../../../utils";
import { setCurrentUserAuthen } from "./user";

export const login = (formValues) => async (dispatch) => {
  const response = await axios.post(
    "/api/authentication/user/login",
    formValues
  );
  const { token } = response.data;
  localStorage.setItem("jwtToken", token);
  setAuthorization(token);
  dispatch(setCurrentUserAuthen(jwt.decode(token)));
};
