import axios from "../../../api/server";
import { SAVE_STATUS } from "../../value";

export const getStatus = (id) => async (dispatch) => {
  console.log(id);
  const response = await axios.get(`/status/get/${id}`);
  console.log(response.data);
  dispatch({ type: SAVE_STATUS, action: response.data });
};
