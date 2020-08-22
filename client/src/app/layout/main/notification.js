import React from "react";
import Comment from "../../asset/img/png/speech-bubble.png";
import Heart from "../../asset/img/png/heart.png";
import Friend from "../../asset/img/png/friend.png";

const Notification = () => {
  return (
    <div className="notification-page">
      <ul className="notification-page-list">
        <li className="notification-page-list-card">
          <div className="notification-page-list-card__image">
            <img
              src="https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-9/31732433_1002327203256085_8328172093543809024_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=LdnPf02Ly5sAX-q0dxP&_nc_ht=scontent.fsgn5-1.fna&oh=af47ec5479a3726602171823717ef32a&oe=5F636AC6"
              className="notification-page-list-card__image__ava"
              alt=""
            />
            <img
              src={Friend}
              alt=""
              className="notification-page-list-card__image__icon"
            />
          </div>
          <div className="notification-page-list-card-contain">
            <div className="notification-page-list-card-contain__text">
              <span className="notification-page-list-card-contain__seen">
                Nguyễn Võ Đức Lộc
              </span>
              <p>send you a friend's request</p>
            </div>
            <div className="notification-page-list-card-contain__subtext notification-page-list-card-contain__seen">
              3 friends
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
              <span>Nguyễn Võ Đức Lộc</span>
              <p>response to your comment</p>
            </div>
            <div className="notification-page-list-card-contain__subtext">
              13 hours ago
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
              src={Heart}
              alt=""
              className="notification-page-list-card__image__icon"
            />
          </div>
          <div className="notification-page-list-card-contain">
            <div className="notification-page-list-card-contain__text">
              <span className="notification-page-list-card-contain__seen">
                Nguyễn Võ Đức Lộc
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
              src="https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-9/31732433_1002327203256085_8328172093543809024_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=LdnPf02Ly5sAX-q0dxP&_nc_ht=scontent.fsgn5-1.fna&oh=af47ec5479a3726602171823717ef32a&oe=5F636AC6"
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
              <span>Nguyễn Võ Đức Lộc & 17 peoples</span>
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
        </li>
      </ul>
    </div>
  );
};

export default Notification;
