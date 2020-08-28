import axios from "../../../api/server";
import { SAVE_STATUS } from "../../value";

export const getStatus = (id, setStatus, setComments, setLike) => async (
  dispatch
) => {
  const response = await axios.get(`/status/get/${id}`);
  setStatus(response.data);
  setComments(response.data.comment);
  setLike(response.data.like);
  // dispatch({ type: SAVE_STATUS, payload: response.data });
};
