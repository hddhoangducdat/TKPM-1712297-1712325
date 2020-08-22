import axios from "../../../api/server";
import { SEARCH_RELATIONSHIP } from "../../value";

export const searchUserRelation = (user, index) => async (
  dispatch,
  getState
) => {
  const response = await axios.get(
    `/relationship/${getState().auth.id}/${user._id}`
  );
  dispatch({
    type: SEARCH_RELATIONSHIP,
    payload: {
      stt: index,
      relationship: response.data,
    },
  });
};
