import axios from "../../../api/server";
import _ from "lodash";

export const getUserList = () => async (dispatch) => {
  const response = await axios.get("/user/list");
  dispatch({
    type: "GET_USER_LIST",
    payload: response.data,
  });
};

export const getUserListAndUpadte = (id) => async (dispatch) => {
  const response = await axios.get("/user/list");
  dispatch({
    type: "GET_USER_LIST",
    payload: response.data,
  });

  dispatch({
    type: "USER_DATA_UPDATE",
    payload: _.find(response.data, function (o) {
      return o._id === id;
    }),
  });
};
