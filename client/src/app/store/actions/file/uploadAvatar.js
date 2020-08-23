import axios from "../../../api/server";
import { UPDATE_AVATAR } from "../../value";
import { updateAvatar } from "../../actions";

export const uploadAvatar = (file) => async (dispatch, getState) => {
  const formData = new FormData();
  formData.append("userId", getState().auth.id);
  formData.append("file", file);
  axios({
    method: "post",
    url: "/file",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((response) => {
      dispatch({ type: UPDATE_AVATAR, payload: response.data.fileUrl });
      dispatch(updateAvatar(response.data.fileUrl));
    })
    .catch((err) => {
      console.log(err);
    });
};
