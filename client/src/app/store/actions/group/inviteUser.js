import axios from "../../../api/server";
import { saveNoti } from "../../actions";

export const inviteUser = (id) => async (dispatch, getState) => {
  const response = await axios.post(`/group/add/member/${id}`, {
    groupId: getState().group._id,
  });
  const noti = {
    from: getState().auth.id,
    to: id,
    groupId: getState().group._id,
    userName: getState().auth.user.userName,
    avatar: getState().auth.user.avatar,
    name: getState().group.groupName,
    type: "add-group",
  };
  getState().auth.socket.emit("send-noti", {
    contain: response.data,
    to: id,
  });
  dispatch(saveNoti(noti));
};
