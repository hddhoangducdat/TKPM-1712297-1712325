import axios from "../../../api/server";

export const cancleRequest = (id) => async (dispatch) => {
  if (id) {
    await axios.delete(`request/cancle/friend/${id}`);
    dispatch({ type: "CANCLE_FRIEND" });
  }
};

export const addFriend = (from, to) => async (dispatch) => {
  const result = await axios.post(`request/add/friend/${to}`, { from });
  dispatch({ type: "ADD_FRIEND", payload: result.data });
};

export const getRequest = (id1, id2) => async (dispatch) => {
  const result = await axios.get(`request/get/id1/${id1}/id2/${id2}`);
  dispatch({ type: "GET_FRIEND", payload: result.data });
};

export const acceptFriend = (id, user1, user2, socket) => async (dispatch) => {
  if (id) {
    const { data } = await axios.patch(`request/accept/friend/${id}`, {
      user1,
      user2,
    });

    console.log(data);

    dispatch({ type: "GET_CHAT_DIALOG", payload: data.chatDialog });
    dispatch({ type: "GET_CURRENT_USER", payload: data.user1 });
    dispatch({ type: "ACCEPT_FRIEND" });
    socket.emit("sendRequest", {
      id: user2 + user1,
      type: "acceptFriend",
      data,
    });
  }
};

export const unFriend = (user1, user2) => async (dispatch) => {
  await axios.patch(`request/unfriend`, {
    user1,
    user2,
  });
  dispatch({ type: "UNFRIEND" });
};
