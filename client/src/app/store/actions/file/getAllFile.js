import axios from "../../../api/server";
import { GET_USER_FILE } from "../../value";

export const getAllFile = (id) => async (dispatch) => {
  const response = await axios.get(`user/getAllFile/${id}`);
  dispatch({ type: GET_USER_FILE, payload: response.data });
};
