import axios from "../../../api/server";
import { RENDER_NOTI_ALL } from "../../value";

export const getNoti = () => async (dispatch, getState) => {
  const response = await axios.get(`/noti/get/${getState().auth.id}`);
  dispatch({ type: RENDER_NOTI_ALL, payload: response.data });
};
