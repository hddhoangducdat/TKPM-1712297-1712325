import axios from "../../../api/server";
import { GET_CHATBOX_DATA } from "../../value";

export const getListMessage = (id) => async (dispatch) => {
  const response = await axios.get(`/chat/${id}`);
  dispatch({ type: GET_CHATBOX_DATA, payload: response.data });
};
