import axios from "../../../api/server";
import history from "../../../../history";

export const updateNewUser = (id, address, number, gender) => async (
  dispatch
) => {
  const result = await axios.patch(`user/update/starting/${id}`, {
    number,
    address,
    gender,
  });

  dispatch({ type: "GET_CURRENT_USER", payload: result.data });
  history.push("/home");
};
