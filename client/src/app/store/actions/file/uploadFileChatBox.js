import axios from "../../../api/server";
import { saveFileChatBox } from "../../actions";

export const uploadFileChatBox = (files) => async (dispatch, getState) => {
  const formData = new FormData();
  formData.append("userId", getState().auth.id);

  files.forEach((f) => formData.append("files", f));

  axios({
    method: "post",
    url: "/file/uploadFiles",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((response) => {
      response.data.map((file) => {
        dispatch(saveFileChatBox(file._id));
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
