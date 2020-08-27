import axios from "../../../api/server";
import { GET_GROUP_DETAIL } from "../../value";

export const getGroup = (g) => async (dispatch, getState) => {
  const response = await axios.get(`/group/get/${g.groupId}`);
  dispatch({ type: GET_GROUP_DETAIL, payload: response.data });
};
