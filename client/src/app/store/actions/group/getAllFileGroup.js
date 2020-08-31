import axios from "../../../api/server";
import { GET_GROUP_FILE } from "../../value";

export const getAllFileGroup = (id) => async (dispatch) => {
  if (id) {
    console.log(id);
    const response = await axios.get(`/group/getAllFile/${id}`);
    console.log(response.data);
    dispatch({ type: GET_GROUP_FILE, payload: response.data });
  }
};
