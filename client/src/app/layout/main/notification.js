import React, { useEffect, useState } from "react";
import { useSelector, connect } from "react-redux";
import {
  getNoti,
  acceptFriendNoti,
  seenNoti,
  increaseNoti,
} from "../../store/actions";

import Comment from "../../asset/img/png/speech-bubble.png";
import Heart from "../../asset/img/png/heart.png";
import Friend from "../../asset/img/png/friend.png";
import AddGroup from "../../asset/img/png/add-group.png";
import AddFriend from "../../asset/img/png/add-friend.png";
import Post from "../../asset/img/png/blog.png";
import DeadLine from "../../asset/img/png/deadline.png";
import Submit from "../../asset/img/png/submit.png";

const Notification = ({ seenNoti, acceptFriendNoti, getNoti }) => {
  const { noti } = useSelector((state) => state);

  useEffect(() => {
    getNoti();
  }, [noti.length]);

  return (
    <div className="notification-page">
      <ul className="notification-page-list">
        {noti.map((value, index) => {
          return (
            <li
              key={index}
              className="notification-page-list-card"
              onClick={() => {
                if (!value.seen) {
                  seenNoti(value._id);
                }
              }}
            >
              <div className="notification-page-list-card__image">
                <img
                  src={value.avatar}
                  className="notification-page-list-card__image__ava"
                  alt=""
                />
                <img
                  src={
                    value.type === "add"
                      ? AddFriend
                      : value.type === "add-group"
                      ? AddGroup
                      : value.type === "add-post-group"
                      ? Post
                      : value.type === "create-deadline"
                      ? DeadLine
                      : value.type === "submit-form"
                      ? Submit
                      : value.type === "like"
                      ? Heart
                      : value.type === "comment"
                      ? Comment
                      : Friend
                  }
                  alt=""
                  className="notification-page-list-card__image__icon"
                />
              </div>
              {value.type === "add" ? (
                <div className="notification-page-list-card-contain">
                  <div className="notification-page-list-card-contain__text">
                    {!value.seen ? (
                      <span className="notification-page-list-card-contain__seen">
                        {value.userName}
                      </span>
                    ) : (
                      <div> {value.userName}</div>
                    )}

                    <p>send you a friend's request</p>
                  </div>
                  <div className="notification-page-list-card-contain__subtext notification-page-list-card-contain__seen">
                    3 friends
                  </div>
                </div>
              ) : value.type === "you-accept" ? (
                <div className="notification-page-list-card-contain">
                  <div className="notification-page-list-card-contain__text">
                    {!value.seen ? (
                      <span className="notification-page-list-card-contain__seen">
                        {value.userName}
                      </span>
                    ) : (
                      <div> {value.userName}</div>
                    )}
                    <p>are friend now</p>
                  </div>
                  <div className="notification-page-list-card-contain__subtext notification-page-list-card-contain__seen">
                    3 friends
                  </div>
                </div>
              ) : value.type === "accept" ? (
                <div className="notification-page-list-card-contain">
                  <div className="notification-page-list-card-contain__text">
                    {!value.seen ? (
                      <span className="notification-page-list-card-contain__seen">
                        {value.userName}
                      </span>
                    ) : (
                      <div> {value.userName}</div>
                    )}

                    <p>accept your friend request</p>
                  </div>
                  <div className="notification-page-list-card-contain__subtext notification-page-list-card-contain__seen">
                    3 friends
                  </div>
                </div>
              ) : value.type === "agree" ? (
                <div className="notification-page-list-card-contain">
                  <div className="notification-page-list-card-contain__text">
                    {!value.seen ? (
                      <span className="notification-page-list-card-contain__seen">
                        {value.userName}
                      </span>
                    ) : (
                      <div> {value.userName}</div>
                    )}
                    <p>is your friend now</p>
                  </div>
                  <div className="notification-page-list-card-contain__subtext notification-page-list-card-contain__seen">
                    3 friends
                  </div>
                </div>
              ) : value.type === "add-group" ? (
                <div className="notification-page-list-card-contain">
                  <div className="notification-page-list-card-contain__text">
                    {!value.seen ? (
                      <span className="notification-page-list-card-contain__seen">
                        {value.userName}
                      </span>
                    ) : (
                      <div> {value.userName}</div>
                    )}
                    <p>add you to his/her new group {value.name}</p>
                  </div>
                  <div className="notification-page-list-card-contain__subtext notification-page-list-card-contain__seen">
                    3 friends
                  </div>
                </div>
              ) : value.type === "add-post-group" ? (
                <div className="notification-page-list-card-contain">
                  <div className="notification-page-list-card-contain__text">
                    {!value.seen ? (
                      <span className="notification-page-list-card-contain__seen">
                        {value.userName}
                      </span>
                    ) : (
                      <div> {value.userName}</div>
                    )}
                    <p>post a status on your group {value.name}</p>
                  </div>
                  <div className="notification-page-list-card-contain__subtext notification-page-list-card-contain__seen">
                    3 friends
                  </div>
                </div>
              ) : value.type === "submit-form" ? (
                <div className="notification-page-list-card-contain">
                  <div className="notification-page-list-card-contain__text">
                    {!value.seen ? (
                      <span className="notification-page-list-card-contain__seen">
                        {value.userName}
                      </span>
                    ) : (
                      <div> {value.userName}</div>
                    )}
                    <p>submit a deadline name ${value.name}</p>
                  </div>
                  <div className="notification-page-list-card-contain__subtext notification-page-list-card-contain__seen">
                    3 friends
                  </div>
                </div>
              ) : value.type === "create-deadline" ? (
                <div className="notification-page-list-card-contain">
                  <div className="notification-page-list-card-contain__text">
                    {!value.seen ? (
                      <span className="notification-page-list-card-contain__seen">
                        {value.userName}
                      </span>
                    ) : (
                      <div> {value.userName}</div>
                    )}
                    <p>
                      create a new deadline for you in {value.name} deadline
                    </p>
                  </div>
                  <div className="notification-page-list-card-contain__subtext notification-page-list-card-contain__seen">
                    3 friends
                  </div>
                </div>
              ) : value.type === "like" ? (
                <div className="notification-page-list-card-contain">
                  <div className="notification-page-list-card-contain__text">
                    {!value.seen ? (
                      <span className="notification-page-list-card-contain__seen">
                        {value.userName}
                      </span>
                    ) : (
                      <div> {value.userName}</div>
                    )}
                    <p>Like your status</p>
                  </div>
                  <div className="notification-page-list-card-contain__subtext notification-page-list-card-contain__seen">
                    3 friends
                  </div>
                </div>
              ) : value.type === "comment" ? (
                <div className="notification-page-list-card-contain">
                  <div className="notification-page-list-card-contain__text">
                    {!value.seen ? (
                      <span className="notification-page-list-card-contain__seen">
                        {value.userName}
                      </span>
                    ) : (
                      <div> {value.userName}</div>
                    )}
                    <p>Comment in your status</p>
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
                  <button
                    className="notification-page-list-card__button__accept"
                    onClick={() => {
                      acceptFriendNoti(value);
                      // increaseNoti();
                    }}
                  >
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
      </ul>
    </div>
  );
};

export default connect(null, {
  increaseNoti,
  acceptFriendNoti,
  seenNoti,
  getNoti,
})(Notification);
