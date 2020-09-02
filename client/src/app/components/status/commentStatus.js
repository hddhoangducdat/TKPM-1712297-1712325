import React, { useState } from "react";
import { ReactComponent as EmojiIcon } from "../../asset/img/icon/emoji.svg";
import { commentStatus } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import EmojiChooser from "../../components/emoji/emojiChooser";

const CommentStatus = ({ status, comments, setComments }) => {
  const { avatar, userName } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [chat, setChat] = useState("");
  const [emoji, setEmoji] = useState(false);

  return (
    <div className="home-page-list-status__comment__input status-detail-input">
      <img src={avatar} alt="" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(commentStatus(e.target.comment.value, status));
          setComments([
            {
              userName,
              avatar,
              text: chat,
            },
            ...comments,
          ]);
          e.target.comment.value = "";
        }}
        className="home-page-form"
      >
        <input
          placeholder="write comment here..."
          name="comment"
          value={chat}
          onChange={(e) => {
            setChat(e.target.value);
          }}
        />
      </form>
      <a
        href="#"
        onClick={() => {
          setEmoji(true);
          console.log("haha");
        }}
      >
        <EmojiIcon
          onClick={() => {
            setEmoji(true);
            console.log("haha");
          }}
        />
      </a>
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
    </div>
  );
};

export default CommentStatus;
