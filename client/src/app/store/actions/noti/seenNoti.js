import axios from "../../../api/server";
import { SEEN_NOTI } from "../../value";

export const seenNoti = (id) => async (dispatch, getState) => {
  dispatch({ type: SEEN_NOTI, payload: id });
  await axios.patch(`/noti/seen/${id}`, { id: getState().auth.id });
};
