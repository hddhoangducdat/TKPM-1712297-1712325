import React from "react";
import SearchMessenger from "./searchMessenger";
import MessengerList from "./messengerList";
import MessengerChatBox from "./messengerChatBox";

const Messenger = () => {
  return (
    <div className="messenger-container">
      <MessengerList />
      <SearchMessenger />
      <MessengerChatBox />
    </div>
  );
};

export default Messenger;
