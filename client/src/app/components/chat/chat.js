import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getChatDialog } from "../../store/actions";
import io from "socket.io-client";

//CSS

import "../../css/chat/chatBox.css";

// Action

import { saveMessage } from "../../store/actions";

let socket;

const Chat = ({ chatBoxId, dataBaseMessage, userId, saveMessage }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(dataBaseMessage);
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit("join", chatBoxId);
  }, [chatBoxId]);

  useEffect(() => {
    socket.on("message", (text) => {
      setMessages((messages) => {
        saveMessage(chatBoxId, [...messages, text]);
        return [...messages, text];
      });
    });
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", { userId, message, chatBoxId });
      setMessage("");
      // console.log(messages);
    }
  };

  const messageList = () => {
    // console.log(messages);
    return messages.map((message, index) => {
      const who = message.id === userId ? "me" : "you";
      const statusAndName =
        message.id === userId ? (
          <div className="entete">
            <h2>Vincent</h2>
            <h3>10:12AM, Today</h3>
            <span className="status blue"></span>
          </div>
        ) : (
          <div className="entete">
            <span className="status green"></span>
            <h2>Vincent</h2>
            <h3>10:12AM, Today</h3>
          </div>
        );
      return (
        <li key={index} className={who}>
          {statusAndName}
          <div className="triangle"></div>
          <div className="message">{message.text}</div>
        </li>
      );
    });
  };

  return (
    <div id="container">
      <aside>
        <header>
          <input type="text" placeholder="search" />
        </header>
        <ul>
          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status orange"></span>
                offline
              </h3>
            </div>
          </li>

          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_10.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status orange"></span>
                offline
              </h3>
            </div>
          </li>
        </ul>
      </aside>
      <main>
        <header>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
            alt=""
          />
          <div>
            <h2>Chat with Vincent Porter</h2>
            <h3>already 1902 messages</h3>
          </div>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png"
            alt=""
          />
        </header>
        <ul id="chat">{messageList()}</ul>
        <footer>
          <form onSubmit={formSubmit}>
            <input
              id="chatBoxInput"
              type="text"
              name="message"
              component="input"
              value={message}
              onChange={({ target: { value } }) => setMessage(value)}
              placeholder="Type your message"
            />
            <img
              className="imgChatBoxInput"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png"
              alt=""
            />
            <img
              className="imgChatBoxInput"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png"
              alt=""
            />

            <button id="buttonChatBoxInput"> Send </button>
          </form>
        </footer>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.id,
    chatBoxId: state.chat.chatDialog._id,
    dataBaseMessage: state.chat.chatDialog.message,
  };
};

export default connect(mapStateToProps, { getChatDialog, saveMessage })(Chat);
