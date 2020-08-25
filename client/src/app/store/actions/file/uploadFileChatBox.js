import axios from "../../../api/server";
import { saveFileChatBox } from "../../actions";

export const uploadFileChatBox = (files) => async (dispatch, getState) => {
  files.forEach((f) => {
    const formData = new FormData();
    formData.append("userId", getState().auth.id);
    formData.append("file", f);

    axios({
      method: "post",
      url: "/file",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        dispatch(saveFileChatBox(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
