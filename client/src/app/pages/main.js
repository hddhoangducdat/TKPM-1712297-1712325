import React from "react";

import Left from "../layout/part/left";
import Middle from "../layout/part/middle";
import Right from "../layout/part/right";
import ChatBoxFile from "../components/file/chatBoxFile";
import { useSelector } from "react-redux";
import PostForm from "../components/file/postForm";
import DeadLinePost from "../components/deadline/deadlinePost";
import GroupCreate from "../components/group/groupCreate";
import SubmitDeadLine from "../components/deadline/submitDeadLine";
import StatusDetail from "../components/status/statusDetail";
import FileManager from "../components/file/fileManager";
import FriendManager from "../components/relationship/friendManager";
import InviteFriend from "../components/relationship/inviteFriend";

const Home = () => {
  const { chatBox, postForm, fileManager } = useSelector(
    (state) => state.utils.file
  );
  const { group, deadline, submit, invite } = useSelector(
    (state) => state.utils.post
  );
  const { status } = useSelector((state) => state.utils);
  const { friend } = useSelector((state) => state.utils.auth);

  return (
    <div className="home-container">
      <div className="grid">
        <Left />
      </div>
      <div className="grid">
        <Middle />
      </div>
      <div className="grid">
        <Right />
      </div>
      {chatBox.show ? <ChatBoxFile /> : <div />}
      {group === 1 ? <GroupCreate /> : <div />}
      {postForm !== 0 ? <PostForm /> : <div />}
      {deadline === 1 ? <DeadLinePost /> : <div />}
      {submit !== 0 ? <SubmitDeadLine /> : <div />}
      {status !== 0 ? <StatusDetail /> : <div />}
      {fileManager !== 0 ? <FileManager /> : <div />}
      {friend !== 0 ? <FriendManager /> : <div />}
      {invite !== 0 ? <InviteFriend /> : <div />}
    </div>
  );
};

export default Home;
