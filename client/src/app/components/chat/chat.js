import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { getChatDialog } from "../../store/actions";
import io from "socket.io-client";

//CSS

import "../../css/chat/chatBox.scss";

// Action

import { saveMessage, saveFile } from "../../store/actions";

let socket;

const Chat = ({
  chatBoxId,
  dataBaseMessage,
  userId,
  saveMessage,
  saveFile,
  file,
  setFile,
}) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(dataBaseMessage);

  const ENDPOINT = "localhost:5000";

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

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

    socket.on("file", (fileName) => {
      setMessages((messages) => {
        saveFile();
        saveMessage(chatBoxId, messages.concat(fileName));
        return messages.concat(fileName);
      });
    });
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", { userId, message, chatBoxId });
      setMessage("");
    }
    if (file.length > 0) {
      const fileName = file.map((f) => {
        return { id: userId, text: f.name };
      });
      const formData = new FormData();
      formData.append("file", file[0]);
      console.log(formData);
      socket.emit("sendFile", { fileName, chatBoxId });
      setFile([]);
    }
  };

  const messageList = () => {
    // console.log(messages);
    return messages.map((message, index) => {
      const text =
        message.id === userId
          ? "message other-message float-right"
          : "message my-message";
      const clearfix = message.id === userId ? "clearfix" : "";

      const statusAndName =
        message.id === userId ? (
          <div className="message-data align-right">
            <span className="message-data-time">10:10 AM, Today</span>
            <span className="message-data-name">Olia</span>
            <i className="fa fa-circle me"></i>
          </div>
        ) : (
          <div className="message-data">
            <span className="message-data-name">
              <i className="fa fa-circle online"></i> Vincent
            </span>
            <span className="message-data-time">10:12 AM, Today</span>
          </div>
        );
      return (
        <li key={index} className={clearfix}>
          {statusAndName}
          <div className={text}>{message.text}</div>
        </li>
      );
    });
  };

  return (
    <div className="container-chat clearfix">
      <div className="people-list" id="people-list">
        <div className="search">
          <input type="text" placeholder="search" />
          <i className="fa fa-search"></i>
        </div>
        <ul className="list">
          <li className="clearfix">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg"
              alt="avatar"
            />
            <div className="about">
              <div className="name">Vincent Porter</div>
              <div className="status">
                <i className="fa fa-circle online"></i> online
              </div>
            </div>
          </li>

          <li className="clearfix">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg"
              alt="avatar"
            />
            <div className="about">
              <div className="name">Aiden Chavez</div>
              <div className="status">
                <i className="fa fa-circle offline"></i> left 7 mins ago
              </div>
            </div>
          </li>

          <li className="clearfix">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg"
              alt="avatar"
            />
            <div className="about">
              <div className="name">Mike Thomas</div>
              <div className="status">
                <i className="fa fa-circle online"></i> online
              </div>
            </div>
          </li>

          <li className="clearfix">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg"
              alt="avatar"
            />
            <div className="about">
              <div className="name">Erica Hughes</div>
              <div className="status">
                <i className="fa fa-circle online"></i> online
              </div>
            </div>
          </li>

          <li className="clearfix">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg"
              alt="avatar"
            />
            <div className="about">
              <div className="name">Ginger Johnston</div>
              <div className="status">
                <i className="fa fa-circle online"></i> online
              </div>
            </div>
          </li>

          <li className="clearfix">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg"
              alt="avatar"
            />
            <div className="about">
              <div className="name">Tracy Carpenter</div>
              <div className="status">
                <i className="fa fa-circle offline"></i> left 30 mins ago
              </div>
            </div>
          </li>

          <li className="clearfix">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg"
              alt="avatar"
            />
            <div className="about">
              <div className="name">Christian Kelly</div>
              <div className="status">
                <i className="fa fa-circle offline"></i> left 10 hours ago
              </div>
            </div>
          </li>

          <li className="clearfix">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_08.jpg"
              alt="avatar"
            />
            <div className="about">
              <div className="name">Monica Ward</div>
              <div className="status">
                <i className="fa fa-circle online"></i> online
              </div>
            </div>
          </li>

          <li className="clearfix">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_09.jpg"
              alt="avatar"
            />
            <div className="about">
              <div className="name">Dean Henry</div>
              <div className="status">
                <i className="fa fa-circle offline"></i> offline since Oct 28
              </div>
            </div>
          </li>

          <li className="clearfix">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_10.jpg"
              alt="avatar"
            />
            <div className="about">
              <div className="name">Peyton Mckinney</div>
              <div className="status">
                <i className="fa fa-circle online"></i> online
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="chat">
        <div className="chat-header clearfix">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg"
            alt="avatar"
          />

          <div className="chat-about">
            <div className="chat-with">Chat with Vincent Porter</div>
            <div className="chat-num-messages">already 1 902 messages</div>
          </div>
          <i className="fa fa-star"></i>
        </div>
        <div class="chat-history">
          <ul>{messageList()}</ul>
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-message clearfix">
          <form onSubmit={formSubmit}>
            <textarea
              type="text"
              name="message"
              id="message-to-send"
              value={message}
              placeholder="Type your message"
              onDragEnter={(e) => e.preventDefault()}
              onChange={({ target: { value } }) => setMessage(value)}
              rows="3"
            ></textarea>

            <button>Send</button>
          </form>
        </div>
      </div>
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

export default connect(mapStateToProps, {
  getChatDialog,
  saveMessage,
  saveFile,
})(Chat);
