import axios from "../../../api/server";
import { SEARCH } from "../../value";
import { searchUserRelation } from "./searchUserRelation";

export const searchUser = (key) => async (dispatch, getState) => {
  await axios
    .post(`/user/search/${key}`, {
      _id: getState().auth.id,
    })
    .then((response) => {
      dispatch({ type: SEARCH, payload: response.data });
      response.data.map((user, index) => {
        dispatch(searchUserRelation(user, index));
      });
    });
};
