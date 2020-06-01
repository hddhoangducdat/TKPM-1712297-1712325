import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
import history from "../../../history";

//CSS

import "../../css/chat/chatBox.scss";

// Action

import { saveMessage, saveFile, getChatDialog } from "../../store/actions";

// Component
import SearchList from "../search/list";

let socket;

const Chat = ({
  getChatDialog,
  chatBoxId,
  dataBaseMessage,
  userId,
  saveMessage,
  saveFile,
  file,
  setFile,
  searchUser,
  chatBox,
  setProfile,
  user,
}) => {
  const [searchList, setSearchList] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(dataBaseMessage);

  const [currentChatName, setCurrentChatName] = useState("");
  const [currentChatAvatar, setCurrentChatAvatar] = useState("");

  const ENDPOINT = "localhost:5000";

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setProfile(user);
    getChatDialog(chatBox[0], userId, "");
    setCurrentChatName(chatBox[0].name);
    setCurrentChatAvatar(chatBox[0].avatar);
  }, []);

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("join", chatBoxId);
    setMessages(dataBaseMessage);
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
  }, [chatBoxId]);

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
      socket.emit("sendFile", { fileName, chatBoxId });
      setFile([]);
    }
  };

  const onSearch = ({ target: { value } }) => {
    setSearch(value);
    setShowSearch(true);
    const filter = value.toLowerCase();

    if (value !== "") {
      try {
        setSearchList(
          searchUser.filter(({ data: { fullName } }) => {
            const lc = fullName.toLowerCase();
            return lc.includes(filter);
          })
        );
      } catch (err) {}
    } else {
      setSearchList([]);
    }
  };

  const messageList = () => {
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

  const onSearchSubmit = (e) => {
    e.preventDefault();
  };

  const showChatBox = () => {
    return chatBox.map((c) => {
      return (
        <li className="clearfix" key={c.id}>
          <img src={c.avatar} alt="avatar" width="70" />
          <div className="about">
            <div className="name">{c.name}</div>
            <div className="status">
              <i className="fa fa-circle online"></i> online
            </div>
          </div>
        </li>
      );
    });
  };

  return (
    <div className="container-chat clearfix">
      <div className="people-list" id="people-list">
        <form onSubmit={onSearchSubmit}>
          <div className="search">
            <input
              autoComplete="off"
              type="text"
              name="search"
              value={search}
              placeholder="search"
              onChange={onSearch}
              onClick={onSearch}
            />
            <div className="search-list">
              {showSearch ? (
                <SearchList
                  searchList={searchList}
                  setProfile={setProfile}
                  setShowSearch={setShowSearch}
                  // onBlur={() => setShowSearch(false)}
                />
              ) : (
                ""
              )}
            </div>

            <i className="fa fa-search"></i>
          </div>
        </form>
        <ul className="list">{showChatBox()}</ul>
      </div>
      <div className="chat">
        <div className="chat-header clearfix">
          <img src={currentChatAvatar} alt="avatar" width="70" />

          <div className="chat-about">
            <div className="chat-with">{currentChatName}</div>
            <div className="chat-num-messages">already 1 902 messages</div>
          </div>
          <i className="fa fa-star"></i>
        </div>
        <div className="chat-history">
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

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth.user,
    userId: state.auth.id,
    chatBoxId: state.chat.id,
    dataBaseMessage: state.chat.chatDialog,
    chatBox: state.auth.user.data.chatBox,
    searchUser: state.user.list,
  };
};

export default connect(mapStateToProps, {
  getChatDialog,
  saveMessage,
  saveFile,
})(Chat);
