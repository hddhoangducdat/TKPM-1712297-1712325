import axios from "../../../api/server";

export const getUser = () => async (dispatch) => {
  const response = await axios.get("/user/list");
  dispatch({
    type: "GET_LIST_USER",
    payload: response.data,
  });
};
