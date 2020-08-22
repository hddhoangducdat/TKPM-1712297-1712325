import axios from "../../../api/server";
import { SEARCH_RELATIONSHIP } from "../../value";

export const deleteRela = (id, index) => async (dispatch, getState) => {
  await axios.delete(`/relationship/cancle/${id}/${getState().auth.id}`);

  dispatch({
    type: SEARCH_RELATIONSHIP,
    payload: {
      stt: index,
      relationship: "none",
    },
  });
};
