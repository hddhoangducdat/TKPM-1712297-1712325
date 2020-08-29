/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { ReactComponent as PhotoIcon } from "../../asset/img/icon/photopost.svg";
import { ReactComponent as EmojiIcon } from "../../asset/img/icon/emoji.svg";
import { ReactComponent as VideoIcon } from "../../asset/img/icon/videopost.svg";
import { useSelector, useDispatch, connect } from "react-redux";
import { POST_ON } from "../../store/value";
import { likeStatus, unlikeStatus } from "../../store/actions";
import Status from "../../components/status/status";

const GroupStatus = () => {
  const status = useSelector((state) =>
    state.auth.user.status instanceof Array ? state.auth.user.status : []
  );
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.group);
  const { avatar } = useSelector((state) => state.auth.user);

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
          return <Status key={i} group={_id} index={i} id={s} />;
        })}
      </ul>
    </div>
  );
};

export default connect(null, { likeStatus, unlikeStatus })(GroupStatus);
