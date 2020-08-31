/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from "react";

import { ReactComponent as CloseIcon } from "../../asset/img/icon/close.svg";
import { ReactComponent as PhoneIcon } from "../../asset/img/icon/phone.svg";
import { ReactComponent as VideoCallIcon } from "../../asset/img/icon/video-call.svg";
import { ReactComponent as DocumentIcon } from "../../asset/img/icon/document.svg";
import ChatBoxInput from "../../components/chatBox/chatBoxInput";
import { useSelector, connect } from "react-redux";
import { seenMessage } from "../../store/actions";

const MessengerChatBox = ({ setChatBox, chatBox, seenMessage }) => {
  const { message, isGroup } = useSelector((state) => state.chat);
  const _id = useSelector((state) => state.chat.id);
  const { id } = useSelector((state) => state.auth);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  //   scrollToBottom() {
  //     animateScroll.scrollToBottom({
  //       containerId: "ContainerElementID"
  //     });
  // }

  useEffect(scrollToBottom, [message.length]);

  return (
    <div className="messenger-chatbox">
      <div className="messenger-chatbox-nav">
        <div className="messenger-chatbox-nav-info">
          <img src={chatBox.avatar} alt="" />

          <div className="messenger-chatbox-nav-info__name">{chatBox.name}</div>

          <div className="messenger-chatbox-nav-info__icon">
            <a
              href="#"
              className="messenger-chatbox-nav-info__icon__detail icon-color-primary"
            >
              <VideoCallIcon />
            </a>
            <a
              href="#"
              className="messenger-chatbox-nav-info__icon__detail icon-color-phone"
            >
              <PhoneIcon />
            </a>
            <a
              href="#"
              className="messenger-chatbox-nav-info__icon__detail icon-color-red"
              onClick={() => {
                setChatBox({
                  active: false,
                  data: "none",
                });
              }}
            >
              <CloseIcon />
            </a>
          </div>
        </div>
      </div>
      <div
        className="messenger-chatbox-contain"
        onClick={() => {
          if (!chatBox.seen) {
            seenMessage(_id);
          }
        }}
      >
        <ul className="messenger-chatbox-contain-list">
          {message.map((m, index) => {
            if (m.type === "text") {
              if (m.from === id) {
                return (
                  <li
                    key={index}
                    className="messenger-chatbox-contain-list__right"
                  >
                    <div className="messenger-chatbox-contain-list__right__text">
                      {m.text}
                    </div>
                  </li>
                );
              } else {
                return (
                  <li
                    key={index}
                    className="messenger-chatbox-contain-list__left"
                  >
                    <div className="messenger-chatbox-contain-list__left__ava">
                      <img src={m.avatar} alt="" />
                    </div>
                    <div className="messenger-chatbox-contain-list__left__detail">
                      {isGroup ? (
                        <div className="messenger-chatbox-contain-list__left__detail__name">
                          {m.userName}
                        </div>
                      ) : (
                        <div></div>
                      )}
                      <div className="messenger-chatbox-contain-list__left__text">
                        {m.text}
                      </div>
                    </div>
                  </li>
                );
              }
            } else if (m.type === "file") {
              if (m.from === id) {
                return (
                  <li
                    key={index}
                    className="messenger-chatbox-contain-list__right"
                  >
                    <div className="messenger-chatbox-contain-list__right__file">
                      <a
                        href={m.url}
                        className="messenger-chatbox-contain-list__right__file__icon"
                      >
                        <DocumentIcon />
                      </a>
                      <div className="messenger-chatbox-contain-list__right__file__text">
                        {m.text}
                      </div>
                    </div>
                  </li>
                );
              } else
                return (
                  <li
                    key={index}
                    className="messenger-chatbox-contain-list__left"
                  >
                    <div className="messenger-chatbox-contain-list__left__ava">
                      <img src={chatBox.avatar} alt="" />
                    </div>
                    <div className="messenger-chatbox-contain-list__left__detail">
                      <div className="messenger-chatbox-contain-list__left__file">
                        <a
                          href={m.url}
                          className="messenger-chatbox-contain-list__left__file__icon"
                        >
                          <DocumentIcon />
                        </a>
                        <div className="messenger-chatbox-contain-list__left__file__text">
                          {m.text}
                        </div>
                      </div>
                    </div>
                  </li>
                );
            } else if (m.type === "picture") {
              if (m.from === id) {
                return (
                  <li
                    key={index}
                    className="messenger-chatbox-contain-list__right"
                  >
                    <img src={m.url} alt="" />
                  </li>
                );
              } else
                return (
                  <li
                    key={index}
                    className="messenger-chatbox-contain-list__left"
                  >
                    <div className="messenger-chatbox-contain-list__left__ava">
                      <img src={chatBox.avatar} alt="" />
                    </div>
                    <div className="messenger-chatbox-contain-list__left__detail">
                      <div className="messenger-chatbox-contain-list__left__img">
                        <img src={m.url} alt="" />
                      </div>
                    </div>
                  </li>
                );
            }
          })}
          <div ref={messagesEndRef} />{" "}
        </ul>
      </div>
      <ChatBoxInput id={chatBox.id} />
    </div>
  );
};

export default connect(null, { seenMessage })(MessengerChatBox);
