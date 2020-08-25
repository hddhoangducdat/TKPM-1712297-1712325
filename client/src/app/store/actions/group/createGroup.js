import axios from "../../../api/server";

export const createGroup = (friend, file, name) => async (
  dispatch,
  getState
) => {
  const formData = new FormData();
  formData.append("imageCover", file);
  formData.append("groupName", name);
  formData.append("admin", getState().auth.id);
  friend.map((f) => {
    formData.append("member", f._id);
  });

  formData.append("member", getState().auth.id);

  axios({
    method: "post",
    url: "/group",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((response) => {
    console.log(response.data);
  });
};
