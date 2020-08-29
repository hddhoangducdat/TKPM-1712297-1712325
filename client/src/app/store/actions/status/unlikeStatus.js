import axios from "../../../api/server";

export const unlikeStatus = (status) => async (dispatch, getState) => {
  await axios.post(`/status/unlike/${getState().auth.id}`, {
    id: status._id,
  });
};
