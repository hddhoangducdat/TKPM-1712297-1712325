import React, { useState } from "react";
import history from "../../../history";
import Chat from "../../components/chat/chat";
import UserList from "../../components/user/list";
import FileChat from "../../components/file/fileChat";
import _ from "lodash";

import "../../css/home/home.css";

const Home = () => {
  const [clickChat, setClickChat] = useState(false);
  const [file, setFile] = useState([]);
  // console.log(clickChat);

  const onLogOut = () => {
    localStorage.removeItem("jwtToken");
    history.push("/");
  };

  return (
    <div>
      <div className="split-left-home left-home">
        {clickChat ? <Chat file={file} setFile={setFile} /> : ""}
      </div>
      <div className="split-right-home right-home">
        <UserList setClickChat={setClickChat} />
        <button onClick={onLogOut}>Log Out</button>
        {clickChat ? <FileChat file={file} setFile={setFile} /> : ""}
      </div>
    </div>
  );
};

export default Home;
