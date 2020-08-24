import axios from "../../../api/server";

export const getFriends = () => async (dispatch, getState) => {
  console.log("haha");
  const response = await axios.get(
    `/relationship/get/friend/${getState().auth.id}`
  );
  console.log(response.data);
  return response.data;
};
