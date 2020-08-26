import React, { useEffect } from "react";
import { useSelector, connect } from "react-redux";
import { getNoti } from "../../store/actions";

import Comment from "../../asset/img/png/speech-bubble.png";
import Heart from "../../asset/img/png/heart.png";
import Friend from "../../asset/img/png/friend.png";

const Notification = ({ getNoti }) => {
  const { noti } = useSelector((state) => state);

  useEffect(() => {
    getNoti();
  }, [noti.length]);

  return (
    <div className="notification-page">
      <ul className="notification-page-list">
        {noti.map((value) => {
          return (
            <li className="notification-page-list-card">
              <div className="notification-page-list-card__image">
                <img
                  src={value.avatar}
                  className="notification-page-list-card__image__ava"
                  alt=""
                />
                <img
                  src={Friend}
                  alt=""
                  className="notification-page-list-card__image__icon"
                />
              </div>
              {value.type === "add" ? (
                <div className="notification-page-list-card-contain">
                  <div className="notification-page-list-card-contain__text">
                    <span className="notification-page-list-card-contain__seen">
                      {value.userName}
                    </span>
                    <p>send you a friend's request</p>
                  </div>
                  <div className="notification-page-list-card-contain__subtext notification-page-list-card-contain__seen">
                    3 friends
                  </div>
                </div>
              ) : value.type === "accept" ? (
                <div className="notification-page-list-card-contain">
                  <div className="notification-page-list-card-contain__text">
                    <span className="notification-page-list-card-contain__seen">
                      {value.userName}
                    </span>
                    <p>accept your friend request</p>
                  </div>
                  <div className="notification-page-list-card-contain__subtext notification-page-list-card-contain__seen">
                    3 friends
                  </div>
                </div>
              ) : value.type === "agree" ? (
                <div className="notification-page-list-card-contain">
                  <div className="notification-page-list-card-contain__text">
                    <span className="notification-page-list-card-contain__seen">
                      {value.userName}
                    </span>
                    <p>is your friend now</p>
                  </div>
                  <div className="notification-page-list-card-contain__subtext notification-page-list-card-contain__seen">
                    3 friends
                  </div>
                </div>
              ) : value.type === "add-group" ? (
                <div className="notification-page-list-card-contain">
                  <div className="notification-page-list-card-contain__text">
                    <span className="notification-page-list-card-contain__seen">
                      {value.userName}
                    </span>
                    <p>add you to his/her new group</p>
                  </div>
                  <div className="notification-page-list-card-contain__subtext notification-page-list-card-contain__seen">
                    3 friends
                  </div>
                </div>
              ) : value.type === "add-post-group" ? (
                <div className="notification-page-list-card-contain">
                  <div className="notification-page-list-card-contain__text">
                    <span className="notification-page-list-card-contain__seen">
                      {value.userName}
                    </span>
                    <p>post a status on your group</p>
                  </div>
                  <div className="notification-page-list-card-contain__subtext notification-page-list-card-contain__seen">
                    3 friends
                  </div>
                </div>
              ) : value.type === "submit-form" ? (
                <div className="notification-page-list-card-contain">
                  <div className="notification-page-list-card-contain__text">
                    <span className="notification-page-list-card-contain__seen">
                      {value.userName}
                    </span>
                    <p>submit a deadline on group that you are admin</p>
                  </div>
                  <div className="notification-page-list-card-contain__subtext notification-page-list-card-contain__seen">
                    3 friends
                  </div>
                </div>
              ) : value.type === "submit-form" ? (
                <div className="notification-page-list-card-contain">
                  <div className="notification-page-list-card-contain__text">
                    <span className="notification-page-list-card-contain__seen">
                      {value.userName}
                    </span>
                    <p>create a new deadline for you</p>
                  </div>
                  <div className="notification-page-list-card-contain__subtext notification-page-list-card-contain__seen">
                    3 friends
                  </div>
                </div>
              ) : (
                <div></div>
              )}

              {value.type === "add" ? (
                <div className="notification-page-list-card__button">
                  <button className="notification-page-list-card__button__accept">
                    Accept
                  </button>
                  <button className="notification-page-list-card__button__refuse">
                    Refuse
                  </button>
                </div>
              ) : (
                <div></div>
              )}
            </li>
          );
        })}

        {/* <li className="notification-page-list-card">
          <div className="notification-page-list-card__image">
            <img
              src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/p100x100/37388561_1941768082786905_9107092192521879552_n.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_ohc=Eunt83PYXCIAX8Ke2gi&_nc_ht=scontent-hkt1-1.xx&tp=6&oh=6d8b83fa7f46a552439ea03b17d057d7&oe=5F6A49AF"
              className="notification-page-list-card__image__ava"
              alt=""
            />
            <img
              src={Comment}
              alt=""
              className="notification-page-list-card__image__icon"
            />
          </div>
          <div className="notification-page-list-card-contain">
            <div className="notification-page-list-card-contain__text">
              <span>Đỗ Đạt</span>
              <p>send you a friend request</p>
            </div>
            <div className="notification-page-list-card-contain__subtext">
              13 hours ago
            </div>
          </div>
          <div className="notification-page-list-card__button">
            <button className="notification-page-list-card__button__accept">
              Accept
            </button>
            <button className="notification-page-list-card__button__refuse">
              Refuse
            </button>
          </div>
        </li>
        <li className="notification-page-list-card">
          <div className="notification-page-list-card__image">
            <img
              src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/p100x100/79869115_185799419232130_5566995059838025728_o.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=F_gOjN1HTg0AX_maaQf&_nc_ht=scontent-hkt1-1.xx&tp=6&oh=cc4baf691a2e92a2fc689acc8bfd8783&oe=5F6A6B07"
              className="notification-page-list-card__image__ava"
              alt=""
            />
            <img
              src={Heart}
              alt=""
              className="notification-page-list-card__image__icon"
            />
          </div>
          <div className="notification-page-list-card-contain">
            <div className="notification-page-list-card-contain__text">
              <span className="notification-page-list-card-contain__seen">
                Sáng Lê
              </span>
              <p>react to your comment</p>
            </div>
            <div className="notification-page-list-card-contain__subtext notification-page-list-card-contain__seen">
              14 hours ago
            </div>
          </div>
        </li>
        <li className="notification-page-list-card">
          <div className="notification-page-list-card__image">
            <img
              src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/p100x100/117035336_1386334394887979_3702445538632406172_n.jpg?_nc_cat=110&_nc_sid=dbb9e7&_nc_ohc=tC1h1Q8hbmgAX_Dwg75&_nc_ht=scontent-hkt1-1.xx&tp=6&oh=ff0e5a0c5598b8403cbecfe0e7b6bf2c&oe=5F69BEA2"
              className="notification-page-list-card__image__ava"
              alt=""
            />
            <img
              src={Heart}
              alt=""
              className="notification-page-list-card__image__icon"
            />
          </div>
          <div className="notification-page-list-card-contain">
            <div className="notification-page-list-card-contain__text">
              <span>Phu Tran & 17 peoples</span>
              <p>react to your post</p>
            </div>
            <div className="notification-page-list-card-contain__subtext">
              17 hours ago
            </div>
          </div>
        </li>
        <li className="notification-page-list-card">
          <div className="notification-page-list-card__image">
            <img
              src="https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-9/31732433_1002327203256085_8328172093543809024_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=LdnPf02Ly5sAX-q0dxP&_nc_ht=scontent.fsgn5-1.fna&oh=af47ec5479a3726602171823717ef32a&oe=5F636AC6"
              className="notification-page-list-card__image__ava"
              alt=""
            />
            <img
              src={Comment}
              alt=""
              className="notification-page-list-card__image__icon"
            />
          </div>
          <div className="notification-page-list-card-contain">
            <div className="notification-page-list-card-contain__text">
              <span>Nguyễn Võ Đức Lộc & 3 peoples</span>
              <p>comment in your post</p>
            </div>
            <div className="notification-page-list-card-contain__subtext">
              1 day ago
            </div>
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default connect(null, { getNoti })(Notification);
