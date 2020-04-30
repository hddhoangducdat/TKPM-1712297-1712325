import React, { useState } from "react";
import history from "../../../history";
import Chat from "../../components/chat/chat";
import UserList from "../../components/user/list";
import _ from "lodash";

const Home = () => {
  const [clickChat, setClickChat] = useState(false);
  // console.log(clickChat);

  const onLogOut = () => {
    localStorage.removeItem("jwtToken");
    history.push("/");
  };

  return (
    <div>
      <button onClick={onLogOut}>Log Out</button>
      <UserList setClickChat={setClickChat} />
      {clickChat ? <Chat /> : ""}
    </div>
  );
};

export default Home;
