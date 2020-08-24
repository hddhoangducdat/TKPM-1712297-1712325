import axios from "../../../api/server";
import { SEARCH_RELATIONSHIP } from "../../value";

export const deleteRela = (user, index) => async (dispatch, getState) => {
  await axios.delete(`/relationship/cancle/${user._id}/${getState().auth.id}`);

  dispatch({
    type: SEARCH_RELATIONSHIP,
    payload: {
      stt: index,
      relationship: "none",
    },
  });
};
