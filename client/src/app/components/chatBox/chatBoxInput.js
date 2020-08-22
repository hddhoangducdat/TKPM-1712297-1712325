/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { ReactComponent as UploadFileIcon } from "../../asset/img/icon/uploadfile.svg";
import { ReactComponent as PhotoIcon } from "../../asset/img/icon/photo.svg";
import { ReactComponent as SendIcon } from "../../asset/img/icon/send.svg";
import { ReactComponent as EmojiIcon } from "../../asset/img/icon/emoji.svg";

const ChatBoxInput = () => {
  return (
    <div className="messenger-chatbox-input">
      <div className="messenger-chatbox-input-detail">
        <a href="#" className="messenger-chatbox-input-detail__icon">
          <PhotoIcon />
        </a>
        <a href="#" className="messenger-chatbox-input-detail__icon">
          <UploadFileIcon />
        </a>
        <div className="messenger-chatbox-input-detail__form">
          <a href="#" className="messenger-chatbox-input-detail__form__icon ">
            <EmojiIcon />
          </a>
          <input placeholder="Aa" />
        </div>
      </div>
      <div className="messenger-chatbox-input-submit">
        <a href="#" className="messenger-chatbox-input-detail__icon">
          <SendIcon />
        </a>
      </div>
    </div>
  );
};

export default ChatBoxInput;
