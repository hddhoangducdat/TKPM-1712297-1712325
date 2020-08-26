import axios from "../../../api/server";
import { GET_DEADLINE } from "../../value";

export const getDeadline = () => async (dispatch, getState) => {
  const response = await axios.get(`/deadline/${getState().group._id}`);
  console.log(response.data);
  dispatch({ type: GET_DEADLINE, payload: response.data });
};
