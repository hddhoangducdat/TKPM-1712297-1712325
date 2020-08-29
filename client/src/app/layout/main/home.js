/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

import nested from "../../utils/nested";
import { ReactComponent as PhotoIcon } from "../../asset/img/icon/photopost.svg";
import { ReactComponent as EmojiIcon } from "../../asset/img/icon/emoji.svg";
import { ReactComponent as VideoIcon } from "../../asset/img/icon/videopost.svg";
import { useDispatch, useSelector } from "react-redux";
import { POST_ON } from "../../store/value";
import Status from "../../components/status/status";

const Home = () => {
  const dispatch = useDispatch();

  const { avatar } = useSelector((state) => state.auth.user);

  const status = useSelector((state) =>
    state.auth.user.status instanceof Array ? state.auth.user.status : []
  );

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
        {status.map((s, i) => {
          return <Status key={i} index={i} id={s} />;
        })}
      </ul>
    </div>
  );
};

export default Home;
