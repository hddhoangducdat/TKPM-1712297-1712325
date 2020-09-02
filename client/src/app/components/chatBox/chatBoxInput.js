/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

import { ReactComponent as UploadFileIcon } from "../../asset/img/icon/uploadfile.svg";
import { ReactComponent as PhotoIcon } from "../../asset/img/icon/photo.svg";
import { ReactComponent as SendIcon } from "../../asset/img/icon/send.svg";
import { ReactComponent as EmojiIcon } from "../../asset/img/icon/emoji.svg";
import EmojiChooser from "../emoji/emojiChooser";

import {
  RENDER_MESSAGE,
  CHAT_BOX_FILE_ON,
  SET_SOCKET,
} from "../../store/value";

import { saveMessage } from "../../store/actions";

import io from "socket.io-client";
import { useSelector, useDispatch, connect } from "react-redux";

let socket;

const ChatBoxInput = ({ id, saveMessage }) => {
  const [emoji, setEmoji] = useState(false);

  const userId = useSelector((state) => state.auth.id);
  const { avatar, userName } = useSelector((state) => state.auth.user);
  const [chat, setChat] = React.useState("");
  const ENDPOINT = "localhost:5000";
  const dispatch = useDispatch();

  const onSendMessage = (e) => {
    e.preventDefault();
    if (chat !== "") {
      const messageObj = {
        avatar,
        userName,
        text: chat,
        from: userId,
        type: "text",
      };

      socket.emit("send-message", { id, messageObj }, () => setChat(""));

      saveMessage(id, messageObj);
    }
  };

  useEffect(() => {
    socket = io(ENDPOINT);

    dispatch({ type: SET_SOCKET, payload: socket });

    socket.emit(`chatbox`, id);

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, id]);

  useEffect(() => {
    socket.on("receive-message", (messageObj) => {
      dispatch({ type: RENDER_MESSAGE, payload: messageObj });
    });
  }, [id]);

  return (
    <form className="messenger-chatbox-input" onSubmit={onSendMessage}>
      {emoji ? (
        <EmojiChooser
          setEmoji={setEmoji}
          setChat={(emo) => {
            setChat(chat + String.fromCodePoint(emo));
          }}
        />
      ) : (
        <div></div>
      )}
      <div className="messenger-chatbox-input-detail">
        <a
          href="#"
          className="messenger-chatbox-input-detail__icon"
          onClick={() => {
            dispatch({ type: CHAT_BOX_FILE_ON });
          }}
        >
          <PhotoIcon />
        </a>
        <a href="#" className="messenger-chatbox-input-detail__icon">
          <UploadFileIcon />
        </a>
        <div className="messenger-chatbox-input-detail__form">
          <a href="#" className="messenger-chatbox-input-detail__form__icon ">
            <EmojiIcon
              onClick={() => {
                setEmoji(true);
              }}
            />
          </a>
          <input
            placeholder="Aa"
            value={chat}
            onChange={(e) => setChat(e.target.value)}
          />
        </div>
      </div>
      <div className="messenger-chatbox-input-submit">
        <button href="#" className="messenger-chatbox-input-detail__icon">
          <SendIcon />
        </button>
      </div>
    </form>
  );
};

export default connect(null, { saveMessage })(ChatBoxInput);
