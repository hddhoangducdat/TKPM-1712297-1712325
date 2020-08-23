import axios from "../../../api/server";
import { SAVE_STATUS } from "../../value";

export const createPost = (text, url) => async (dispatch, getState) => {
  const response = await axios.post(`/status/post/${getState().auth.id}`, {
    text,
    url,
  });
  console.log(response.data);
  dispatch({ type: SAVE_STATUS, payload: response.data });
};
