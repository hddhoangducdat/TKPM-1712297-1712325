import React, { useState } from "react";

import { ReactComponent as AddGroupIcon } from "../../asset/icons/add-group.svg";

import { ReactComponent as BackIcon } from "../../asset/img/icon/back.svg";

import { ReactComponent as PhotoIcon } from "../../asset/img/icon/photopost.svg";
import { ReactComponent as EmojiIcon } from "../../asset/img/icon/emoji.svg";
import { ReactComponent as VideoIcon } from "../../asset/img/icon/videopost.svg";
import { ReactComponent as DownArrowIcon } from "../../asset/img/icon/down-arrow.svg";
import { ReactComponent as SaveIcon } from "../../asset/img/icon/save.svg";
import { ReactComponent as ShareIcon } from "../../asset/img/icon/share.svg";
import { ReactComponent as LikeIcon } from "../../asset/img/icon/heart.svg";
import { ReactComponent as CommentIcon } from "../../asset/img/icon/comment.svg";

import { ReactComponent as TeamIcon } from "../../asset/img/icon/team.svg";
import { ReactComponent as EyeIcon } from "../../asset/img/icon/eye.svg";
import { ReactComponent as LockIcon } from "../../asset/img/icon/lock.svg";
import { ReactComponent as FileIcon } from "../../asset/img/icon/file.svg";

const Group = () => {
  const [detail, setDetail] = useState(false);

  return (
    <div className="group-page">
      <div className="group-page-add">
        <a href="#">
          <AddGroupIcon />
        </a>
      </div>

      {!detail ? (
        <ul className="group-page-card">
          <input
            className="group-page-card-input"
            placeholder="Search your specific group"
          ></input>
          <li
            className="group-page-card-detail"
            onClick={() => setDetail(true)}
          >
            <div className="group-page-card-detail__img">
              <img
                src="https://www.facebook.com/images/groups/Null-Header-1640x500-2x.png"
                alt=""
              />
            </div>
            <div className="group-page-card-detail__info">
              <div className="group-page-card-detail__info__text">
                Phân tích và quản lý yêu cầu
              </div>
              <div className="group-page-card-detail__info__subtext">
                489 members
              </div>
            </div>
            <button className="group-page-card-detail__button">Leave</button>
          </li>
          <li className="group-page-card-detail">
            <div className="group-page-card-detail__img">
              <img
                src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/s960x960/57572676_2324059237841850_3952189271820992512_o.jpg?_nc_cat=100&_nc_sid=825194&_nc_ohc=7Y33Tncn3rgAX_-rvDD&_nc_ht=scontent.fsgn5-5.fna&_nc_tp=7&oh=2a0bf1a3f519d6ba998c470871525d1c&oe=5F652213"
                alt=""
              />
            </div>
            <div className="group-page-card-detail__info">
              <div className="group-page-card-detail__info__text">
                Phân tích và quản lý yêu cầu
              </div>
              <div className="group-page-card-detail__info__subtext">
                489 members
              </div>
            </div>
            <button className="group-page-card-detail__button">Leave</button>
          </li>
          <li className="group-page-card-detail">
            <div className="group-page-card-detail__img">
              <img
                src="https://www.facebook.com/images/groups/Null-Header-1640x500-2x.png"
                alt=""
              />
            </div>
            <div className="group-page-card-detail__info">
              <div className="group-page-card-detail__info__text">
                Phân tích và quản lý yêu cầu
              </div>
              <div className="group-page-card-detail__info__subtext">
                489 members
              </div>
            </div>
            <button className="group-page-card-detail__button">Leave</button>
          </li>
          <li className="group-page-card-detail">
            <div className="group-page-card-detail__img">
              <img
                src="https://www.facebook.com/images/groups/Null-Header-1640x500-2x.png"
                alt=""
              />
            </div>
            <div className="group-page-card-detail__info">
              <div className="group-page-card-detail__info__text">
                Phân tích và quản lý yêu cầu
              </div>
              <div className="group-page-card-detail__info__subtext">
                489 members
              </div>
            </div>
            <button className="group-page-card-detail__button">Leave</button>
          </li>
          <li className="group-page-card-detail">
            <div className="group-page-card-detail__img">
              <img
                src="https://www.facebook.com/images/groups/Null-Header-1640x500-2x.png"
                alt=""
              />
            </div>
            <div className="group-page-card-detail__info">
              <div className="group-page-card-detail__info__text">
                Phân tích và quản lý yêu cầu
              </div>
              <div className="group-page-card-detail__info__subtext">
                489 members
              </div>
            </div>
            <button className="group-page-card-detail__button">Leave</button>
          </li>
        </ul>
      ) : (
        <div className="group-page-home">
          <div className="group-page-home-back">
            <a href="#" onClick={() => setDetail(false)}>
              <BackIcon />
            </a>
          </div>
          <div className="group-page-home-header">
            <div className="group-page-home-header__img">
              <img
                src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/93102204_2713364912322261_6860432806149881856_n.jpg?_nc_cat=103&_nc_sid=825194&_nc_ohc=H60ZDH4dCdwAX-C1CiI&_nc_ht=scontent-xsp1-1.xx&oh=78f153cd7c7292a002792f696a67d3aa&oe=5F649105"
                alt=""
              />
            </div>
            <div className="group-page-home-header__info">
              <div className="group-page-home-header-info__contain">
                <div className="group-page-home-header__info__text">
                  Phương pháp tính CNTT 2020
                </div>
                <div className="group-page-home-header__info__subtext">
                  275 members
                </div>
              </div>
              <button className="group-page-home-header__info__button">
                + invite
              </button>
            </div>
          </div>
          <div className="group-page-home-main">
            <div>
              <div className="home-page-post group-page-home-main__resize">
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
              <ul className="home-page-list group-page-home-main__resize">
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
                    <a
                      href="#"
                      className="home-page-list-status__header__info__icon"
                    >
                      <DownArrowIcon />
                    </a>
                  </div>
                  <div className="home-page-list-status__contain">
                    <div>
                      Jimmy Butler (28 PTS) & Goran Dragic (24 PTS) come up
                      clutch late to propel the Miami Heat to a 1-0 series lead!
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
                              Is anyone even watching??? I mean Sean Hannity
                              beat the NBA games in the ratings...which is
                              beyond sad since I thought only about 10 people
                              even watched Hannity. Thanks Silverman and James
                              for helping destroy one of the greatest sports
                              ever... Smh
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
                    <a
                      href="#"
                      className="home-page-list-status__header__info__icon"
                    >
                      <DownArrowIcon />
                    </a>
                  </div>
                  <div className="home-page-list-status__contain">
                    <div>
                      Jimmy Butler (28 PTS) & Goran Dragic (24 PTS) come up
                      clutch late to propel the Miami Heat to a 1-0 series lead!
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
            <div className="group-page-home-main-right">
              <div className="group-page-home-main-right__introduce group-page-home-decorate">
                <div className="group-page-home-main-right__introduce__title">
                  Introduction
                </div>
                <div className="group-page-home-main-right__introduce__contain">
                  <a href="#">
                    <LockIcon />
                  </a>
                  <div className="group-page-home-main-right__introduce__contain__info">
                    <span>Secret Group</span>
                    <p>Mainly for study session & doing deadline</p>
                  </div>
                </div>
                <div className="group-page-home-main-right__introduce__contain">
                  <a href="#">
                    <EyeIcon />
                  </a>
                  <div className="group-page-home-main-right__introduce__contain__info">
                    <span>Seen</span>
                    <p>Anyone in group can access</p>
                  </div>
                </div>
                <div className="group-page-home-main-right__introduce__contain">
                  <a href="#">
                    <TeamIcon />
                  </a>
                  <div className="group-page-home-main-right__introduce__contain__info">
                    <span>Group for PPT CNTT 2020</span>
                  </div>
                </div>
              </div>
              <div className="group-page-home-main-right__share group-page-home-decorate">
                <div className="group-page-home-main-right__introduce__title">
                  Share File
                </div>
                <ul className="group-page-home-main-right__share__list">
                  <li className="group-page-home-main-right__share__list__file">
                    <img
                      src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-0/p320x320/118011160_2839021256423292_2922419493353089090_n.jpg?_nc_cat=106&_nc_sid=b9115d&_nc_ohc=A44hDx2T_TEAX-AoeMg&_nc_ht=scontent-xsp1-2.xx&_nc_tp=6&oh=4c3a16d4bb7615dab3c59874cf247ead&oe=5F660B9A"
                      alt=""
                    />
                  </li>

                  <li className="group-page-home-main-right__share__list__file">
                    <img
                      src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-0/p320x320/118011160_2839021256423292_2922419493353089090_n.jpg?_nc_cat=106&_nc_sid=b9115d&_nc_ohc=A44hDx2T_TEAX-AoeMg&_nc_ht=scontent-xsp1-2.xx&_nc_tp=6&oh=4c3a16d4bb7615dab3c59874cf247ead&oe=5F660B9A"
                      alt=""
                    />
                  </li>

                  <li className="group-page-home-main-right__share__list__file">
                    <img
                      src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-0/p320x320/118011160_2839021256423292_2922419493353089090_n.jpg?_nc_cat=106&_nc_sid=b9115d&_nc_ohc=A44hDx2T_TEAX-AoeMg&_nc_ht=scontent-xsp1-2.xx&_nc_tp=6&oh=4c3a16d4bb7615dab3c59874cf247ead&oe=5F660B9A"
                      alt=""
                    />
                  </li>

                  <li className="group-page-home-main-right__share__list__file">
                    <img
                      src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-0/p320x320/118011160_2839021256423292_2922419493353089090_n.jpg?_nc_cat=106&_nc_sid=b9115d&_nc_ohc=A44hDx2T_TEAX-AoeMg&_nc_ht=scontent-xsp1-2.xx&_nc_tp=6&oh=4c3a16d4bb7615dab3c59874cf247ead&oe=5F660B9A"
                      alt=""
                    />
                  </li>

                  <li className="group-page-home-main-right__share__list__file">
                    <img
                      src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-0/p320x320/118011160_2839021256423292_2922419493353089090_n.jpg?_nc_cat=106&_nc_sid=b9115d&_nc_ohc=A44hDx2T_TEAX-AoeMg&_nc_ht=scontent-xsp1-2.xx&_nc_tp=6&oh=4c3a16d4bb7615dab3c59874cf247ead&oe=5F660B9A"
                      alt=""
                    />
                  </li>
                  <li className="group-page-home-main-right__share__list__file">
                    <a href="#">
                      <FileIcon />
                    </a>
                    <span>CSDL.txt</span>
                  </li>
                </ul>
                <button className="group-page-home-main-right__share__button">
                  see more
                </button>
              </div>
              <div className="group-page-home-main-right__deadline group-page-home-decorate">
                <div className="group-page-home-main-right__introduce__title">
                  Deadline
                </div>
              </div>

              <ul className="group-page-home-main-right__deadline">
                <li className="group-page-home-decorate">
                  <div className="group-page-home-main-right__introduce__title">
                    #5 Deadline: Java App
                  </div>
                  <div className="group-page-home-main-right__deadline__info">
                    <div>Start Date: 20/07/2020</div>
                    <div>End Date: 25/07/2020</div>
                    <div>Time Left: 1h30m</div>
                    <div className="group-page-home-main-right__deadline__info__image">
                      <a href="#">
                        <FileIcon />
                      </a>
                      <span>#DEADLINE5.docx</span>
                    </div>
                    <button className="group-page-home-main-right__deadline__info__can">
                      submit
                    </button>
                  </div>
                </li>
                <li className="group-page-home-decorate">
                  <div className="group-page-home-main-right__introduce__title">
                    #5 Deadline: Java App
                  </div>
                  <div className="group-page-home-main-right__deadline__info">
                    <div>Start Date: 20/07/2020</div>
                    <div>End Date: 25/07/2020</div>
                    <div className="group-page-home-main-right__deadline__failed">
                      Time Left: 25m
                    </div>
                    <div className="group-page-home-main-right__deadline__info__image">
                      <a href="#">
                        <FileIcon />
                      </a>
                      <span>#DEADLINE5.docx</span>
                    </div>
                    <button className="group-page-home-main-right__deadline__info__cant">
                      you failed
                    </button>
                  </div>
                </li>

                <li className="group-page-home-decorate">
                  <div className="group-page-home-main-right__introduce__title">
                    #5 Deadline: Java App
                  </div>
                  <div className="group-page-home-main-right__deadline__info">
                    <div>Start Date: 20/07/2020</div>
                    <div>End Date: 25/07/2020</div>
                    <div className="group-page-home-main-right__deadline__done">
                      Time Left: 0m
                    </div>
                    <div className="group-page-home-main-right__deadline__info__image">
                      <a href="#">
                        <FileIcon />
                      </a>
                      <span>#DEADLINE5.docx</span>
                    </div>
                    <button className="group-page-home-main-right__deadline__info__done">
                      <a href="#">
                        <FileIcon />
                      </a>
                      <div>1712325.zip</div>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* */}
    </div>
  );
};

export default Group;
