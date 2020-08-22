import React, { useState } from "react";
import SearchMessenger from "./searchMessenger";
import MessengerList from "./messengerList";
import MessengerChatBox from "./messengerChatBox";

const Messenger = () => {
  const [chatBox, setChatBox] = useState({
    active: false,
    data: "none",
  });

  return (
    <div className="messenger-container">
      <MessengerList setChatBox={setChatBox} />
      <SearchMessenger />
      {chatBox.active ? (
        <MessengerChatBox setChatBox={setChatBox} chatBox={chatBox.data} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Messenger;
