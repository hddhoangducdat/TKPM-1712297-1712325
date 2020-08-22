import axios from "../../../api/server";
import { SEARCH_RELATIONSHIP } from "../../value";

export const acceptFriend = (id, index) => async (dispatch, getState) => {
  await axios.patch(`/relationship/acceptRequest`, {
    id1: id,
    id2: getState().auth.id,
  });

  dispatch({
    type: SEARCH_RELATIONSHIP,
    payload: {
      stt: index,
      relationship: "friend",
    },
  });
};
