/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";

import { ReactComponent as PhotoIcon } from "../../asset/img/icon/photopost.svg";
import { ReactComponent as EmojiIcon } from "../../asset/img/icon/emoji.svg";
import { ReactComponent as VideoIcon } from "../../asset/img/icon/videopost.svg";
import { ReactComponent as DownArrowIcon } from "../../asset/img/icon/down-arrow.svg";
import { ReactComponent as SaveIcon } from "../../asset/img/icon/save.svg";
import { ReactComponent as ShareIcon } from "../../asset/img/icon/share.svg";
import { ReactComponent as LikeIcon } from "../../asset/img/icon/heart.svg";
import { ReactComponent as CommentIcon } from "../../asset/img/icon/comment.svg";
import { useDispatch, useSelector, connect } from "react-redux";
import { POST_ON } from "../../store/value";

import { getStatus } from "../../store/actions";

const Home = ({ getStatus }) => {
  const dispatch = useDispatch();
  const { avatar, status } = useSelector((state) => state.auth.user);
  const listStatus = useSelector((state) => state.status);

  useEffect(() => {
    if (
      status instanceof Array &&
      status.length > 0 &&
      status.length !== listStatus.length
    ) {
      status.reverse().map((s) => {
        getStatus(s);
      });
    }
  }, [status]);

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
        {listStatus.map((s) => {
          return (
            <li className="home-page-list-status">
              <div className="home-page-list-status__header">
                <img src={s.avatar} alt="" />
                <div className="home-page-list-status__header__info">
                  <div className="home-page-list-status__header__info__name">
                    {s.userName}
                  </div>

                  <p className="home-page-list-status__header__info__time">
                    4 mins
                  </p>
                </div>
                <a
                  href="#"
                  className="home-page-list-status__header__info__icon"
                >
                  <DownArrowIcon />
                </a>
              </div>
              <div className="home-page-list-status__contain">
                {/* <div>
                  Jimmy Butler (28 PTS) & Goran Dragic (24 PTS) come up clutch
                  late to propel the Miami Heat to a 1-0 series lead!
                </div>
                <br />
                <div> #NBAPlayoffs</div>
                <br />
                <div>Bam Adebayo: 17 PTS, 10 REB, 6 AST </div>
                <div> Tyler Herro: 15 PTS, 4 AST</div>
                <div> T.J. Warren: 22 PTS, 8 REB</div>
                <div>Malcolm Brogdon: 22 PTS, 10 AST</div> */}
                {s.text === "" ? (
                  <div></div>
                ) : (
                  <textarea
                    disabled={true}
                    rows={s.text.split("\n").length - 1}
                    className="home-page-list-status__contain_textarea"
                    value={s.text}
                  />
                )}
              </div>
              <div className="home-page-list-status__pic">
                {s.image === "" ? <div /> : <img src={s.image} alt="" />}
              </div>
              <div className="home-page-list-status__number">
                <div className="home-page-list-status__number__contain">
                  <div className="home-page-list-status__number__contain__detail">
                    <div className="home-page-list-status__number__contain__detail__number">
                      {s.comment.length}
                    </div>
                    <div className="home-page-list-status__number__contain__detail__text">
                      comments
                    </div>
                  </div>
                  <div className="home-page-list-status__number__contain__detail">
                    <div className="home-page-list-status__number__contain__detail__number">
                      {s.like.length}
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
                  <a
                    href="#"
                    className="home-page-list-status__icon__contain__save"
                  >
                    <SaveIcon />
                  </a>
                  <a
                    href="#"
                    className="home-page-list-status__icon__contain__like"
                  >
                    <LikeIcon />
                  </a>
                  <a
                    href="#"
                    className="home-page-list-status__icon__contain__share"
                  >
                    <ShareIcon />
                  </a>
                </div>
              </div>
              <div className="home-page-list-status__comment">
                <div className="home-page-list-status__comment__input">
                  <img
                    src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/54463133_104992784011639_7082721617398202368_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=vSuORAJS7moAX_Axz2y&_nc_ht=scontent.fsgn5-3.fna&oh=a7f27492245291f0d96fc15ac9b063c7&oe=5F60A433"
                    alt=""
                  />
                  <input placeholder="write comment here..." />
                  <a href="#">
                    <EmojiIcon />
                  </a>
                </div>
                <div className="home-page-list-status__comment__list">
                  <div className="home-page-list-status__comment__list__container">
                    <img
                      src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/54463133_104992784011639_7082721617398202368_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=vSuORAJS7moAX_Axz2y&_nc_ht=scontent.fsgn5-3.fna&oh=a7f27492245291f0d96fc15ac9b063c7&oe=5F60A433"
                      alt=""
                    />

                    <div className="home-page-list-status__comment__list__container__other">
                      <div className="home-page-list-status__comment__list__container__box">
                        <div className="home-page-list-status__comment__list__container__box__name">
                          Keven B. Taongan
                        </div>
                        <div className="home-page-list-status__comment__list__container__box__text">
                          Is anyone even watching??? I mean Sean Hannity beat
                          the NBA games in the ratings...which is beyond sad
                          since I thought only about 10 people even watched
                          Hannity. Thanks Silverman and James for helping
                          destroy one of the greatest sports ever... Smh
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
                  <div className="home-page-list-status__comment__list__container">
                    <img
                      src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/54463133_104992784011639_7082721617398202368_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=vSuORAJS7moAX_Axz2y&_nc_ht=scontent.fsgn5-3.fna&oh=a7f27492245291f0d96fc15ac9b063c7&oe=5F60A433"
                      alt=""
                    />

                    <div className="home-page-list-status__comment__list__container__other">
                      <div className="home-page-list-status__comment__list__container__box">
                        <div className="home-page-list-status__comment__list__container__box__name">
                          Keven B. Taongan
                        </div>
                        <div className="home-page-list-status__comment__list__container__box__text">
                          Is anyone even watching???
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
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default connect(null, { getStatus })(Home);
