/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { ReactComponent as CloseIcon } from "../../asset/img/icon/close.svg";
import { ReactComponent as PhoneIcon } from "../../asset/img/icon/phone.svg";
import { ReactComponent as VideoCallIcon } from "../../asset/img/icon/video-call.svg";
import { ReactComponent as DocumentIcon } from "../../asset/img/icon/document.svg";
import ChatBoxInput from "../../components/chatBox/chatBoxInput";
import { useSelector } from "react-redux";

const MessengerChatBox = ({ setChatBox, chatBox }) => {
  const { message } = useSelector((state) => state.chat);
  const { id } = useSelector((state) => state.auth);

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
      <div className="messenger-chatbox-contain">
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
                      <img src={chatBox.avatar} alt="" />
                    </div>
                    <div className="messenger-chatbox-contain-list__left__detail">
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
                  <li className="messenger-chatbox-contain-list__right">
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
                  <li className="messenger-chatbox-contain-list__left">
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
                  <li className="messenger-chatbox-contain-list__right">
                    <img src={m.url} alt="" />
                  </li>
                );
              } else
                return (
                  <li className="messenger-chatbox-contain-list__left">
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
          {/* <li className="messenger-chatbox-contain-list__left">
            <div className="messenger-chatbox-contain-list__left__ava">
              <img
                src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/67670507_2149626571995470_5212981182169350144_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=aYYJgcbGzWcAX8Lg6sr&_nc_oc=AQn0nQ9dpdEgJMp1Rfpo0m9wNGwh9OdHb7TbuvtHXeg9_N8myH4BSM13A21FStdmMcI&_nc_ht=scontent-xsp1-2.xx&oh=b0053ed88e96af7bb41590658c22e509&oe=5F616C5C"
                alt=""
              />
            </div>
            <div className="messenger-chatbox-contain-list__left__detail">
              <div className="messenger-chatbox-contain-list__left__text">
                máy kh có RAm ảo chạy đuối vãi, mở nhiều cái là đứng
              </div>
              <div className="messenger-chatbox-contain-list__left__img">
                <img
                  src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/67670507_2149626571995470_5212981182169350144_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=aYYJgcbGzWcAX8Lg6sr&_nc_oc=AQn0nQ9dpdEgJMp1Rfpo0m9wNGwh9OdHb7TbuvtHXeg9_N8myH4BSM13A21FStdmMcI&_nc_ht=scontent-xsp1-2.xx&oh=b0053ed88e96af7bb41590658c22e509&oe=5F616C5C"
                  alt=""
                />
              </div>
              <div className="messenger-chatbox-contain-list__left__file">
                <a
                  href="#"
                  className="messenger-chatbox-contain-list__left__file__icon"
                >
                  <DocumentIcon />
                </a>
                <div className="messenger-chatbox-contain-list__left__file__text">
                  TKPM_1712325.zip
                </div>
              </div>
            </div>
          </li>

          <li className="messenger-chatbox-contain-list__right">
            <div className="messenger-chatbox-contain-list__right__text">
              đừng hỏng giữ quá k bik sửa là khỏi làm luôn
            </div>
          </li>
          <li className="messenger-chatbox-contain-list__right">
            <img
              src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/117444715_314656856255712_3749510226075806312_n.png?_nc_cat=108&_nc_sid=b96e70&_nc_ohc=UE66SUBs7qcAX8mY7Zu&_nc_ht=scontent-xsp1-1.xx&oh=5631072f9f3c6d1ce86c822a93100770&oe=5F5F9E45"
              alt=""
            />
          </li>
          <li className="messenger-chatbox-contain-list__right">
            <div className="messenger-chatbox-contain-list__right__file">
              <a
                href="#"
                className="messenger-chatbox-contain-list__right__file__icon"
              >
                <DocumentIcon />
              </a>
              <div className="messenger-chatbox-contain-list__right__file__text">
                TKPM_1712325.zip
              </div>
            </div>
          </li>

          <li className="messenger-chatbox-contain-list__left">
            <div className="messenger-chatbox-contain-list__left__ava">
              <img
                src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/67670507_2149626571995470_5212981182169350144_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=aYYJgcbGzWcAX8Lg6sr&_nc_oc=AQn0nQ9dpdEgJMp1Rfpo0m9wNGwh9OdHb7TbuvtHXeg9_N8myH4BSM13A21FStdmMcI&_nc_ht=scontent-xsp1-2.xx&oh=b0053ed88e96af7bb41590658c22e509&oe=5F616C5C"
                alt=""
              />
            </div>
            <div className="messenger-chatbox-contain-list__left__text">
              máy kh có RAm ảo chạy đuối vãi, mở nhiều cái là đứng
            </div>
          </li>
          <li className="messenger-chatbox-contain-list__right">
            <div className="messenger-chatbox-contain-list__right__text">
              đừng hỏng giữ quá k bik sửa là khỏi làm luôn
            </div>
           
          </li>
          <li className="messenger-chatbox-contain-list__left">
            <div className="messenger-chatbox-contain-list__left__ava">
              <img
                src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/67670507_2149626571995470_5212981182169350144_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=aYYJgcbGzWcAX8Lg6sr&_nc_oc=AQn0nQ9dpdEgJMp1Rfpo0m9wNGwh9OdHb7TbuvtHXeg9_N8myH4BSM13A21FStdmMcI&_nc_ht=scontent-xsp1-2.xx&oh=b0053ed88e96af7bb41590658c22e509&oe=5F616C5C"
                alt=""
              />
            </div>
            <div className="messenger-chatbox-contain-list__left__text">
              máy kh có RAm ảo chạy đuối vãi, mở nhiều cái là đứng
            </div>
          </li>
          <li className="messenger-chatbox-contain-list__right">
            <div className="messenger-chatbox-contain-list__right__text">
              đừng hỏng giữ quá k bik sửa là khỏi làm luôn
            </div>
        
          </li> */}
        </ul>
      </div>
      <ChatBoxInput id={chatBox.id} />
    </div>
  );
};

export default MessengerChatBox;
