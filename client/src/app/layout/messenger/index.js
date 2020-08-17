import React from "react";
import SearchMessenger from "./searchMessenger";
import MessengerList from "./messengerList";

const Messenger = () => {
  return (
    <div className="messenger-container">
      <MessengerList />
      <SearchMessenger />
    </div>
  );
};

export default Messenger;
