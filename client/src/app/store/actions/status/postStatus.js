import axios from "../../../api/server";
import { createPost } from "../../actions";

export const postStatus = (text, file) => async (dispatch, getState) => {
  if (file[0]) {
    const formData = new FormData();
    formData.append("userId", getState().auth.id);
    formData.append("file", file[0].file);
    axios({
      method: "post",
      url: "/file",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((response) => {
      dispatch(createPost(text, response.data.fileUrl));
    });
  }

  dispatch(createPost(text, ""));
};
