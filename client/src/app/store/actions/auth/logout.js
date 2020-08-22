import history from "../../../../history";
import { DISABLE_ALL } from "../../value";

export const logout = () => (dispatch) => {
  localStorage.setItem("jwtToken", "");
  dispatch({ type: DISABLE_ALL });
  history.push("/");
};
