import axios from "../../../api/server";
import { GET_FRIEND } from "../../value";

export const getFriends = () => async (dispatch, getState) => {
  if (getState().auth.id) {
    const response = await axios.get(
      `/relationship/get/friend/${getState().auth.id}`
    );
    dispatch({ type: GET_FRIEND, payload: response.data });
  }
};
