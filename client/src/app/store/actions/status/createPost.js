import axios from "../../../api/server";
import { SAVE_STATUS } from "../../value";

export const createPost = (text, url) => async (dispatch, getState) => {
  console.log(text);
  const response = await axios.post(`/status/post/${getState().auth.id}`, {
    text,
    url,
  });
  console.log(response.data);
  dispatch({ type: SAVE_STATUS, payload: response.data });
};

export const createPostGroup = (group, text, url) => async (
  dispatch,
  getState
) => {
  console.log(group);
  const response = await axios.post(
    `/status/post/group/${getState().auth.id}`,
    {
      group,
      text,
      url,
    }
  );
  dispatch({ type: SAVE_STATUS, payload: response.data });
};
