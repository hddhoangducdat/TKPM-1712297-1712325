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
import { useSelector, useDispatch, connect } from "react-redux";
import { POST_ON, EMPTY_STATUS } from "../../store/value";
import { getStatus } from "../../store/actions";

const GroupStatus = ({ getStatus }) => {
  const { avatar, status } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const listStatus = useSelector((state) => state.status);
  const { _id } = useSelector((state) => state.group);

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
        {listStatus.map((s) => {
          if (s.group.id !== _id) return <div></div>;
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
        {/* <li className="home-page-list-status">
          <div className="home-page-list-status__header">
            <img
              src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/54463133_104992784011639_7082721617398202368_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=yYCLotjBUR0AX-UCg5a&_nc_ht=scontent-hkt1-1.xx&oh=79e18fc849cf37ee38e000a8e50bfe20&oe=5F6C81B3"
              alt=""
            />
            <div className="home-page-list-status__header__info">
              <div className="home-page-list-status__header__info__name">
                {"Hoàng Đức Đạt"}
              </div>

              <p className="home-page-list-status__header__info__time">
                4 mins
              </p>
            </div>
            <a href="#" className="home-page-list-status__header__info__icon">
              <DownArrowIcon />
            </a>
          </div>
          <div className="home-page-list-status__contain">
            <textarea
              disabled={true}
              rows={3}
              className="home-page-list-status__contain_textarea"
              value={
                "LeBron James scores 30 PTS (10-12 FGM) and dishes out 10 AST as the Los Angeles Lakers go up 3-1! They look to close the series out on Wed. (8/26) at 9pm/et on TNT. #NBAPlayoffs \n\n Anthony Davis: 18 PTS, 5 AST, 2 BLK \n Kyle Kuzma: 18 PTS, 5 3PM \n Jusuf Nurkic : 20 PTS, 13 REB, 4 AST"
              }
            />
          </div>
          <div className="home-page-list-status__pic">
            <img
              src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-0/s640x640/118460084_10158984105223463_3044761024286623503_o.jpg?_nc_cat=1&_nc_sid=730e14&_nc_ohc=69kJ93xaEOsAX-VUcWD&_nc_ht=scontent-hkt1-1.xx&tp=7&oh=b651aaac6361b8d7fbc1b942def39f4e&oe=5F6A8225"
              alt=""
            />
          </div>
          <div className="home-page-list-status__number">
            <div className="home-page-list-status__number__contain">
              <div className="home-page-list-status__number__contain__detail">
                <div className="home-page-list-status__number__contain__detail__number">
                  {"1,8K"}
                </div>
                <div className="home-page-list-status__number__contain__detail__text">
                  comments
                </div>
              </div>
              <div className="home-page-list-status__number__contain__detail">
                <div className="home-page-list-status__number__contain__detail__number">
                  {"74K"}
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
                src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/54463133_104992784011639_7082721617398202368_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=yYCLotjBUR0AX-UCg5a&_nc_ht=scontent-hkt1-1.xx&oh=79e18fc849cf37ee38e000a8e50bfe20&oe=5F6C81B3"
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
                  src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-0/p173x172/118451814_10158983805618463_5356494935910020092_o.jpg?_nc_cat=1&_nc_sid=730e14&_nc_ohc=YPsNWIQbSjQAX8BOP4z&_nc_oc=AQn1uDE7umkk41Cs26CGbHy7C0aKfo0rrB9qgtVxVeawB7kCS9Oa3RpRYkaYWG3rUxc&_nc_ht=scontent.fsgn5-2.fna&tp=6&oh=dee5106f5837e5f2fe0ebb594b1f2002&oe=5F6A838E"
                  alt=""
                />

                <div className="home-page-list-status__comment__list__container__other">
                  <div className="home-page-list-status__comment__list__container__box">
                    <div className="home-page-list-status__comment__list__container__box__name">
                      Michael Garrett
                    </div>
                    <div className="home-page-list-status__comment__list__container__box__text">
                      Yeah this series isn't going past Game 5. I knew that the
                      Lakers weren't going to have a let down today. They were
                      getting this game at all costs for Kobe. For all the
                      Lakers fans here Happy Mamba Day 🙂!
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
                  src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/87454385_1227620667434309_1272339045887770624_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=S_jnrU9FsncAX9jL7wl&_nc_ht=scontent-hkt1-1.xx&oh=61121b845e5e1f7d8875320e7990eeb6&oe=5F6BE828"
                  alt=""
                />

                <div className="home-page-list-status__comment__list__container__other">
                  <div className="home-page-list-status__comment__list__container__box">
                    <div className="home-page-list-status__comment__list__container__box__name">
                      Nguyễn Gia Hy
                    </div>
                    <div className="home-page-list-status__comment__list__container__box__text">
                      ổn =))
                    </div>
                  </div>
                  <div className="home-page-list-status__comment__list__container__choice">
                    <div className="home-page-list-status__comment__list__container__choice__component">
                      <a href="#">
                        <LikeIcon />
                      </a>
                      <p>2</p>
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
    */}
      </ul>
    </div>
  );
};

export default connect(null, { getStatus })(GroupStatus);
