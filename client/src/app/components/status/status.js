/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";

import nested from "../../utils/nested";
import { ReactComponent as PhotoIcon } from "../../asset/img/icon/photopost.svg";
import { ReactComponent as EmojiIcon } from "../../asset/img/icon/emoji.svg";
import { ReactComponent as VideoIcon } from "../../asset/img/icon/videopost.svg";
import { ReactComponent as DownArrowIcon } from "../../asset/img/icon/down-arrow.svg";
import { ReactComponent as SaveIcon } from "../../asset/img/icon/save.svg";
import { ReactComponent as ShareIcon } from "../../asset/img/icon/share.svg";
import { ReactComponent as LikeIcon } from "../../asset/img/icon/heart.svg";
import { ReactComponent as CommentIcon } from "../../asset/img/icon/comment.svg";
import { ReactComponent as HeartActive } from "../../asset/img/icon/heart-active.svg";
import { useDispatch, useSelector, connect } from "react-redux";
import { POST_ON } from "../../store/value";
import {
  getStatus,
  likeStatus,
  unlikeStatus,
  commentStatus,
} from "../../store/actions";

const Status = ({
  index,
  id,
  getStatus,
  likeStatus,
  unlikeStatus,
  commentStatus,
  group,
}) => {
  const [status, setStatus] = useState(false);
  const [like, setLike] = useState([]);
  const { avatar, userName } = useSelector((state) => state.auth.user);
  const userId = useSelector((state) => state.auth.id);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const tmp = id.split("-");
    if (tmp.length > 1) {
      getStatus(tmp[2], setStatus, setComments, setLike);
    } else {
      getStatus(tmp[0], setStatus, setComments, setLike);
    }
  }, [status._id]);

  if (!status) return <div></div>;
  else if (group && status.group.id === "none") return <div></div>;
  else
    return (
      <li key={index} className="home-page-list-status">
        <div className="home-page-list-status__header">
          <img src={avatar} alt="" />
          <div className="home-page-list-status__header__info">
            <div className="home-page-list-status__header__info__name">
              {status.group.id !== "none"
                ? status.userName + " >>> " + status.group.name
                : status.userName}
            </div>

            <p className="home-page-list-status__header__info__time">4 mins</p>
          </div>
          <a href="#" className="home-page-list-status__header__info__icon">
            <DownArrowIcon />
          </a>
        </div>
        <div className="home-page-list-status__contain">
          {status.text === "" ? (
            <div></div>
          ) : (
            <textarea
              disabled={true}
              rows={status.text.split("\n").length}
              className="home-page-list-status__contain_textarea"
              value={status.text}
            />
          )}
        </div>
        <div className="home-page-list-status__pic">
          {status.image === "" ? <div /> : <img src={status.image} alt="" />}
        </div>
        <div className="home-page-list-status__number">
          <div className="home-page-list-status__number__contain">
            <div className="home-page-list-status__number__contain__detail">
              <div className="home-page-list-status__number__contain__detail__number">
                {comments.length}
              </div>
              <div className="home-page-list-status__number__contain__detail__text">
                comments
              </div>
            </div>
            <div className="home-page-list-status__number__contain__detail">
              <div className="home-page-list-status__number__contain__detail__number">
                {like.length}
              </div>
              <div className="home-page-list-status__number__contain__detail__text">
                Likes
              </div>
            </div>
          </div>
        </div>
        <div className="home-page-list-status__icon">
          <div className="home-page-list-status__icon__contain">
            <a
              href="#"
              className="home-page-list-status__icon__contain__comment"
            >
              <CommentIcon />
            </a>
            <a href="#" className="home-page-list-status__icon__contain__save">
              <SaveIcon />
            </a>
            {!like.filter((l) => l === userId).length > 0 ? (
              <a
                href="#"
                className="home-page-list-status__icon__contain__like"
                onClick={() => {
                  setLike([userId, ...like]);
                  likeStatus(status, index);
                }}
              >
                <LikeIcon />
              </a>
            ) : (
              <a
                href="#"
                className="home-page-list-status__icon__contain__like"
                onClick={() => {
                  setLike(
                    like.filter((l) => {
                      if (l === userId) return false;
                      else return true;
                    })
                  );
                  unlikeStatus(status, index);
                }}
              >
                <HeartActive />
              </a>
            )}

            <a href="#" className="home-page-list-status__icon__contain__share">
              <ShareIcon />
            </a>
          </div>
        </div>
        <div className="home-page-list-status__comment">
          <div className="home-page-list-status__comment__input">
            <img src={avatar} alt="" />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                commentStatus(e.target.comment.value, status, index);
                setComments([
                  {
                    userName,
                    avatar,
                    text: e.target.comment.value,
                  },
                  ...comments,
                ]);
                e.target.comment.value = "";
              }}
              className="home-page-form"
            >
              <input placeholder="write comment here..." name="comment" />
            </form>
            <a href="#">
              <EmojiIcon />
            </a>
          </div>
          <div className="home-page-list-status__comment__list">
            {comments.map((c, index) => {
              return (
                <div
                  key={index}
                  className="home-page-list-status__comment__list__container"
                >
                  <img src={c.avatar} alt="" />

                  <div className="home-page-list-status__comment__list__container__other">
                    <div className="home-page-list-status__comment__list__container__box">
                      <div className="home-page-list-status__comment__list__container__box__name">
                        {c.userName}
                      </div>
                      <div className="home-page-list-status__comment__list__container__box__text">
                        {c.text}
                      </div>
                    </div>
                    <div className="home-page-list-status__comment__list__container__choice">
                      <div className="home-page-list-status__comment__list__container__choice__component">
                        <a href="#">
                          <LikeIcon />
                        </a>
                        <p>23</p>
                      </div>
                      <div className="home-page-list-status__comment__list__container__choice__component">
                        <a href="#">
                          <CommentIcon />
                        </a>
                        <p>10</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </li>
    );
};

export default connect(null, {
  commentStatus,
  likeStatus,
  getStatus,
  unlikeStatus,
})(Status);
