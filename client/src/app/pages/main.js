import React from "react";

import Left from "../layout/part/left";
import Middle from "../layout/part/middle";
import Right from "../layout/part/right";
import ChatBoxFile from "../components/file/chatBoxFile";
import { useSelector } from "react-redux";
import PostForm from "../components/file/postForm";

const Home = () => {
  const { chatBox } = useSelector((state) => state.utils.file);
  const { postForm } = useSelector((state) => state.utils.file);

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

      {postForm === 1 ? <PostForm /> : <div />}
    </div>
  );
};

export default Home;
