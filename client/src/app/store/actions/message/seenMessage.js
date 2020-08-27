import axios from "../../../api/server";
import { SEEN_MESSAGE } from "../../value";

export const seenMessage = (id) => async (dispatch, getState) => {
  dispatch({ type: SEEN_MESSAGE, payload: id });
  await axios.post(`/message/seen/${getState().auth.id}`, { id });
};
