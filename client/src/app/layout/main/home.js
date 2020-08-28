/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

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
import Status from "../../components/status/status";

const Home = () => {
  const dispatch = useDispatch();
  const { avatar, status } = useSelector((state) => state.auth.user);
  const [listStatus, setListStatus] = useState([]);

  useEffect(() => {
    setListStatus(status);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status instanceof Array ? status.length : Status instanceof Array]);

  return (
    <div className="home-page">
      <div className="home-page-post">
        <div className="home-page-post__top">
          <img src={avatar} alt="" />
          <button onClick={() => dispatch({ type: POST_ON })}>
            Tell your friends what are you up to
          </button>
        </div>

        <div className="home-page-post__bottom">
          <div className="home-page-post__bottom-icon">
            <a href="#">
              <VideoIcon />
            </a>
            <p>Video</p>
          </div>
          <div className="home-page-post__bottom-icon">
            <a href="#">
              <PhotoIcon />
            </a>
            <p>Picture/File</p>
          </div>
          <div className="home-page-post__bottom-icon">
            <a href="#">
              <EmojiIcon />
            </a>
            <p>Emoji</p>
          </div>
        </div>
      </div>
      <ul className="home-page-list">
        {listStatus instanceof Array ? (
          listStatus.map((s, i) => {
            return <Status isLike={s.like} index={i} id={s.id} />;
          })
        ) : (
          <div></div>
        )}
      </ul>
    </div>
  );
};

export default Home;
