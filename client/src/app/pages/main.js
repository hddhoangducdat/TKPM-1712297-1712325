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

const Home = () => {
  const { chatBox } = useSelector((state) => state.utils.file);
  const { postForm } = useSelector((state) => state.utils.file);
  const { group, deadline, submit, status } = useSelector(
    (state) => state.utils.post
  );

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
      {postForm === 1 ? <PostForm /> : <div />}
      {deadline === 1 ? <DeadLinePost /> : <div />}
      {submit !== 0 ? <SubmitDeadLine /> : <div />}
    </div>
  );
};

export default Home;
