import axios from "../../../api/server";
import { RENDER_NOTI } from "../../value";

export const increaseNoti = () => async (dispatch, getState) => {
  dispatch({ type: RENDER_NOTI });
  await axios.patch(`/noti/add/${getState().auth.id}`);
};
