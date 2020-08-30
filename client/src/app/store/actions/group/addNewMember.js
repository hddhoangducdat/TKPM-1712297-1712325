import axios from "../../../api/server";
import { ADD_NEW_MEMBER } from "../../value";
import { saveNoti } from "../noti";

export const addNewMember = (admin, member) => async (dispatch, getState) => {
  axios({
    method: "path",
    url: `/group/addMember/${getState().group._id}`,
    data: { admin, member },
  }).then((response) => {
    console.log(response.data);
    dispatch({ type: ADD_NEW_MEMBER, payload: response.data });
    // friend.map((f) => {
    //   getState().auth.socket.emit("send-noti", {
    //     contain: response.data,
    //     to: f._id,
    //   });
    //   const noti = {
    //     from: getState().auth.id,
    //     to: f._id,
    //     groupId: response.data.groupId,
    //     userName: getState().auth.user.userName,
    //     avatar: getState().auth.user.avatar,
    //     name: response.data.name,
    //     type: "add-group",
    //   };
    //   dispatch(saveNoti(noti));
    // });
  });
};
