import axios from "../../../api/server";
import { UPDATE_NOTI_ACCEPT } from "../../value";

export const updateNotiAccept = (from, to) => async (dispatch, getState) => {
  await axios.patch("/noti/update/accept", {
    from,
    to,
  });
};
