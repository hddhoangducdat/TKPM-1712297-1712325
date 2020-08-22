import React from "react";

import { ReactComponent as PhotoIcon } from "../../asset/img/icon/photopost.svg";
import { ReactComponent as EmojiIcon } from "../../asset/img/icon/emoji.svg";
import { ReactComponent as VideoIcon } from "../../asset/img/icon/videopost.svg";
import { ReactComponent as DownArrowIcon } from "../../asset/img/icon/down-arrow.svg";
import { ReactComponent as SaveIcon } from "../../asset/img/icon/save.svg";
import { ReactComponent as ShareIcon } from "../../asset/img/icon/share.svg";
import { ReactComponent as LikeIcon } from "../../asset/img/icon/heart.svg";
import { ReactComponent as CommentIcon } from "../../asset/img/icon/comment.svg";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page-post">
        <div className="home-page-post__top">
          <img
            src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/54463133_104992784011639_7082721617398202368_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=vSuORAJS7moAX_Axz2y&_nc_ht=scontent.fsgn5-3.fna&oh=a7f27492245291f0d96fc15ac9b063c7&oe=5F60A433"
            alt=""
          />
          <button>Tell your friends what are you up to</button>
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
        <li className="home-page-list-status">
          <div className="home-page-list-status__header">
            <img
              src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/105286696_3223680747856519_6840687568711217777_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=dWyxzku05vcAX9LK-oW&_nc_ht=scontent-xsp1-2.xx&oh=bd69acb0f8b18b11731331dfe45cc52c&oe=5F61A3B9"
              alt=""
            />
            <div className="home-page-list-status__header__info">
              <div className="home-page-list-status__header__info__name">
                Tôn Bửu
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
            <div>
              Jimmy Butler (28 PTS) & Goran Dragic (24 PTS) come up clutch late
              to propel the Miami Heat to a 1-0 series lead!
            </div>
            <br />
            <div> #NBAPlayoffs</div>
            <br />
            <div>Bam Adebayo: 17 PTS, 10 REB, 6 AST </div>
            <div> Tyler Herro: 15 PTS, 4 AST</div>
            <div> T.J. Warren: 22 PTS, 8 REB</div>
            <div>Malcolm Brogdon: 22 PTS, 10 AST</div>
          </div>
          <div className="home-page-list-status__pic">
            <img
              src="https://i.pinimg.com/originals/ef/7f/b1/ef7fb1b37078b6a2aef8e40710446bfa.jpg"
              alt=""
            />
          </div>
          <div className="home-page-list-status__number">
            <div className="home-page-list-status__number__contain">
              <div className="home-page-list-status__number__contain__detail">
                <div className="home-page-list-status__number__contain__detail__number">
                  258
                </div>
                <div className="home-page-list-status__number__contain__detail__text">
                  comments
                </div>
              </div>
              <div className="home-page-list-status__number__contain__detail">
                <div className="home-page-list-status__number__contain__detail__number">
                  938
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
                      Is anyone even watching??? I mean Sean Hannity beat the
                      NBA games in the ratings...which is beyond sad since I
                      thought only about 10 people even watched Hannity. Thanks
                      Silverman and James for helping destroy one of the
                      greatest sports ever... Smh
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
        <li className="home-page-list-status">
          <div className="home-page-list-status__header">
            <img
              src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/105286696_3223680747856519_6840687568711217777_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=dWyxzku05vcAX9LK-oW&_nc_ht=scontent-xsp1-2.xx&oh=bd69acb0f8b18b11731331dfe45cc52c&oe=5F61A3B9"
              alt=""
            />
            <div className="home-page-list-status__header__info">
              <div className="home-page-list-status__header__info__name">
                Tôn Bửu
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
            <div>
              Jimmy Butler (28 PTS) & Goran Dragic (24 PTS) come up clutch late
              to propel the Miami Heat to a 1-0 series lead!
            </div>
            <br />
            <div> #NBAPlayoffs</div>
            <br />
            <div>Bam Adebayo: 17 PTS, 10 REB, 6 AST </div>
            <div> Tyler Herro: 15 PTS, 4 AST</div>
            <div> T.J. Warren: 22 PTS, 8 REB</div>
            <div>Malcolm Brogdon: 22 PTS, 10 AST</div>
          </div>
          <div className="home-page-list-status__pic">
            <img
              src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-0/s640x640/117992624_10158964172798463_8417658756900970982_o.jpg?_nc_cat=1&_nc_sid=730e14&_nc_ohc=T7ebcFY_mrgAX-O3aWr&_nc_ht=scontent.fsgn5-7.fna&_nc_tp=7&oh=77c0af7a2508dbf5c89c016fca4c5bdc&oe=5F623A0C"
              alt=""
            />
          </div>
          <div className="home-page-list-status__number">
            <div className="home-page-list-status__number__contain">
              <div className="home-page-list-status__number__contain__detail">
                <div className="home-page-list-status__number__contain__detail__number">
                  258
                </div>
                <div className="home-page-list-status__number__contain__detail__text">
                  comments
                </div>
              </div>
              <div className="home-page-list-status__number__contain__detail">
                <div className="home-page-list-status__number__contain__detail__number">
                  938
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
          <div className="home-page-list-status__comment"></div>
        </li>
      </ul>
    </div>
  );
};

export default Home;
