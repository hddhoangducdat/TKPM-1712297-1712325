import axios from "../../../api/server";
import { SAVE_STATUS } from "../../value";
import { saveNoti } from "../../actions";

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
  const response = await axios.post(
    `/status/post/group/${getState().auth.id}`,
    {
      group,
      text,
      url,
    }
  );
  dispatch({ type: SAVE_STATUS, payload: response.data });
  getState().group.data.member((g) => {
    const noti = {
      from: getState().auth.id,
      to: g,
      userName: getState().auth.user.userName,
      avatar: getState().auth.user.avatar,
      type: "add-post-group",
    };
    dispatch(saveNoti(noti));
    getState().socket.emit("send-noti", noti);
  });
};
