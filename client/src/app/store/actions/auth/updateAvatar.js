import axios from "../../../api/server";

export const updateAvatar = (url) => async (dispatch, getState) => {
  await axios.patch(`user/update/avatar/${getState().auth.id}`, { url });
};
