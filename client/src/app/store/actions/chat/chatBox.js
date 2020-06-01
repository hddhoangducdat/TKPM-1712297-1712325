import axios from "../../../api/server";

export const getChatDialog = (chatBox, userId, chatUser) => async (
  dispatch
) => {
  try {
    if (chatBox === "") throw "create";
    const response = await axios.get(`/chat/${chatBox.id}`).then(({ data }) => {
      dispatch({
        type: "GET_CHAT_DIALOG",
        payload: data,
      });
    });
  } catch (err) {
    await axios
      .post("/chat/create", { id1: userId, id2: chatUser })
      .then(({ data }) => {
        dispatch({
          type: "CREATE_CHAT_DIALOG",
          payload: data,
        });
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
