import axios from "../../../api/server";

export const getChatDialog = (id1, id2, setClickChat) => async (dispatch) => {
  try {
    const response = await axios
      .get(`/chat/?user1=${id1}&user2=${id2}`)
      .then(({ data }) => {
        dispatch({
          type: "GET_CHAT_DIALOG",
          payload: data,
        });
        setClickChat(true);
      });
  } catch (err) {
    const response = await axios
      .post("/chat/create", {
        id1,
        id2,
      })
      .then(({ data }) => {
        dispatch({
          type: "CREATE_CHAT_DIALOG",
          payload: data,
        });
        setClickChat(true);
      });
  }
};

export const saveMessage = (chatBoxId, messages) => async (dispatch) => {
  const response = await axios.patch(
    `/chat/chatDialog/save/${chatBoxId}`,
    messages
  );
  dispatch({
    type: "SAVE_MESSAGE",
    payload: response.data,
  });
};
