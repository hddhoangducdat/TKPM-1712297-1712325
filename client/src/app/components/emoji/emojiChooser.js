import React from "react";
import { ReactComponent as CloseIcon } from "../../asset/img/icon/close.svg";

const EmojiChooser = ({ setChat, setEmoji }) => {
  const emojis = [
    0x1f600,
    0x1f604,
    0x1f34a,
    0x1f344,
    0x1f37f,
    0x1f363,
    0x1f370,
    0x1f355,
    0x1f354,
    0x1f35f,
    0x1f6c0,
    0x1f48e,
    0x1f5fa,
    0x23f0,
    0x1f579,
    0x1f4da,
    0x1f431,
    0x1f42a,
    0x1f439,
    0x1f424,
  ];
  return (
    <div className="emoji-container">
      {emojis.map((e) => {
        return (
          <div
            className="emoji-container-circle"
            onClick={() => {
              setChat(e);
              setEmoji(false);
            }}
          >
            <div className="emoji-container-circle-detail">
              {String.fromCodePoint(e)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EmojiChooser;
