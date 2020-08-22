import axios from "../../../api/server";
import { SEARCH_RELATIONSHIP } from "../../value";

export const addFriend = (id, index) => async (dispatch, getState) => {
  await axios.post("/relationship/add", {
    host: getState().auth.id,
    toUser: id,
  });

  dispatch({
    type: SEARCH_RELATIONSHIP,
    payload: {
      stt: index,
      relationship: "pending",
    },
  });
};
