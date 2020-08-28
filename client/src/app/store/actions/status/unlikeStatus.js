import axios from "../../../api/server";
import { UNLIKE_STATUS } from "../../value";
import { saveNoti } from "../noti";

export const unlikeStatus = (status, index) => async (dispatch, getState) => {
  dispatch({ type: UNLIKE_STATUS, payload: { id: getState().auth.id, index } });
  await axios.post(`/status/unlike/${getState().auth.id}`, {
    index,
    id: status._id,
  });
};
