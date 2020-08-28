/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

import { ReactComponent as PhotoIcon } from "../../asset/img/icon/photopost.svg";
import { ReactComponent as EmojiIcon } from "../../asset/img/icon/emoji.svg";
import { ReactComponent as VideoIcon } from "../../asset/img/icon/videopost.svg";
import { ReactComponent as DownArrowIcon } from "../../asset/img/icon/down-arrow.svg";
import { ReactComponent as SaveIcon } from "../../asset/img/icon/save.svg";
import { ReactComponent as ShareIcon } from "../../asset/img/icon/share.svg";
import { ReactComponent as LikeIcon } from "../../asset/img/icon/heart.svg";
import { ReactComponent as CommentIcon } from "../../asset/img/icon/comment.svg";
import { ReactComponent as HeartActive } from "../../asset/img/icon/heart-active.svg";
import { useSelector, useDispatch, connect } from "react-redux";
import { POST_ON, EMPTY_STATUS } from "../../store/value";
import { likeStatus, unlikeStatus } from "../../store/actions";
import Status from "../../components/status/status";

const GroupStatus = ({ likeStatus, unlikeStatus }) => {
  const { avatar, status } = useSelector((state) => state.auth.user);
  const [likes, setLikes] = useState([]);
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.group);

  useEffect(() => {
    setLikes(status.map((s) => s.like));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <div>
      <div className="home-page-post group-page-home-main__resize">
        <div className="home-page-post__top">
          <img src={avatar} alt="" />
          <button onClick={() => dispatch({ type: POST_ON })}>
            Post something on group
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
      <ul className="home-page-list group-page-home-main__resize">
        {status.map((s, i) => {
          return <Status group={true} isLike={s.like} index={i} id={s.id} />;
        })}
      </ul>
    </div>
  );
};

export default connect(null, { likeStatus, unlikeStatus })(GroupStatus);
