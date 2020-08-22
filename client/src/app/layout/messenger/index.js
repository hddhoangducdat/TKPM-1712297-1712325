import React, { useState } from "react";
import SearchMessenger from "./searchMessenger";
import MessengerList from "./messengerList";
import MessengerChatBox from "./messengerChatBox";

const Messenger = () => {
  const [chatBox, setChatBox] = useState(false);

  return (
    <div className="messenger-container">
      <MessengerList setChatBox={setChatBox} />
      <SearchMessenger />
      {chatBox ? <MessengerChatBox setChatBox={setChatBox} /> : <div></div>}
    </div>
  );
};

export default Messenger;
