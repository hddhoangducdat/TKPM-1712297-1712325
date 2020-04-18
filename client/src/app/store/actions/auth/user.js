import axios from "../../../api/server";

export const getCurrentUser = async (dispatch) => {
  const response = await axios.get(`/api/authentication/user`);
  dispatch({ type: "GET_CURRENT_USER", payload: response.data });
};

export const setCurrentUserAuthen = (user) => (dispatch) => {
  if (user) {
    dispatch(getCurrentUser);
    dispatch({
      type: "SET_CURRENT_USER_AUTHEN",
      payload: user._id,
    });
  } else
    dispatch({
      type: "SET_CURRENT_USER_AUTHEN",
      payload: {},
    });
};
