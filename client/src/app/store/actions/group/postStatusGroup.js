import axios from "../../../api/server";
import { createPostGroup } from "../../actions";

export const postStatusGroup = (group, text, file) => async (
  dispatch,
  getState
) => {
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
      dispatch(createPostGroup(group, text, response.data.fileUrl));
    });
  } else {
    dispatch(createPostGroup(group, text, ""));
  }
};
