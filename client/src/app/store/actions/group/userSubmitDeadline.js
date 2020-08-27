import axios from "../../../api/server";
import { GET_DEADLINE, SUBMIT_FILE } from "../../value";
import { saveNoti } from "../noti";

export const userSubmitDeadline = (file) => async (dispatch, getState) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("userId", getState().auth.id);

  axios({
    method: "patch",
    url: `/deadline/submitFile/${getState().utils.post.submit}`,
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((response) => {
    getState().deadline.map((d, i) => {
      if (d._id === response.data._id) {
        console.log(response.data);
        console.log("haga");
        dispatch({
          type: SUBMIT_FILE,
          payload: {
            stt: i,
            value: response.data,
          },
        });
      }
    });

    const noti = {
      from: getState().auth.id,
      to: getState().group.admin,
      userName: getState().auth.user.userName,
      avatar: getState().auth.user.avatar,
      name: response.data.title,
      type: "submit-form",
    };
    dispatch(saveNoti(noti));
  });
};
