import axios from "../../../api/server";
import { ADD_GROUP } from "../../value";

export const getGroup = () => async (dispatch, getState) => {
  await Promise.all(
    getState.auth.user.group(async (g) => {
      const response = axios.get(`/group/get/${g.id}`);
      dispatch({ type: ADD_GROUP, payload: response.data });
    })
  );
};
