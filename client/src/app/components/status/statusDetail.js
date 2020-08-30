/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { ReactComponent as EmojiIcon } from "../../asset/img/icon/emoji.svg";
import { ReactComponent as SaveIcon } from "../../asset/img/icon/save.svg";
import { ReactComponent as ShareIcon } from "../../asset/img/icon/share.svg";
import { ReactComponent as LikeIcon } from "../../asset/img/icon/heart.svg";
import { ReactComponent as CommentIcon } from "../../asset/img/icon/comment.svg";
import { ReactComponent as HeartActive } from "../../asset/img/icon/heart-active.svg";
import { ReactComponent as CloseIcon } from "../../asset/img/icon/close.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  getStatus,
  likeStatus,
  unlikeStatus,
  commentStatus,
} from "../../store/actions";
import { STATUS_OFF } from "../../store/value";

const StatusDetail = () => {
  const [status, setStatus] = useState(false);
  const [like, setLike] = useState([]);
  const [comments, setComments] = useState([]);
  const { avatar, userName } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const id = useSelector((state) => state.utils.status);
  const userId = useSelector((state) => state.auth.id);

  useEffect(() => {
    const tmp = id.split("-");
    if (tmp.length > 1) {
      dispatch(getStatus(tmp[2], setStatus, setComments, setLike));
    } else {
      dispatch(getStatus(tmp[0], setStatus, setComments, setLike));
    }
  }, [id]);

  return (
    <div className="middle-blur middle-blur-split">
      <div className="grid-item-image">
        <a
          href="#"
          className="grid-item-image-icon"
          onClick={() => {
            dispatch({ type: STATUS_OFF });
          }}
        >
          <CloseIcon />
        </a>
        {status.image === "" ? (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"
            alt=""
          />
        ) : (
          <img src={status.image} alt="" />
        )}
      </div>
      <div className="grid-item-info">
        <div className="status-header">
          <img src={status.avatar} alt="" />
          <div className="status-header-name">
            <span>{status.userName}</span>
            <p>2 hours</p>
          </div>
        </div>
        <div className="status-header-text">
          <textarea
            disabled={true}
            rows={3}
            className="home-page-list-status__contain_textarea"
            value={status.text}
          />
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
                  dispatch(likeStatus(status));
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
                  dispatch(unlikeStatus(status));
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
        <div className="home-page-list-status__comment status-detail-comment">
          {comments.map((c, i) => {
            return (
              <div className="home-page-list-status__comment__list">
                <div
                  key={i}
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
              </div>
            );
          })}
        </div>
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
      </div>
    </div>
  );
};

export default StatusDetail;
