/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import nested from "../../utils/nested";
import AddFriend from "../relationship/addfriend";
import Friend from "../relationship/friend";
import Pending from "../relationship/pending";
import Accept from "../relationship/accept";

const SearchDropDown = () => {
  const users = useSelector((state) =>
    nested(state.search, "user") ? state.search.user : []
  );
  const id = useSelector((state) => state.auth.id);
  const relationship = useSelector((state) =>
    nested(state.search, "user")
      ? nested(state.search.user, "relationship")
        ? state.search.user.relationship
        : []
      : []
  );

  const render = () => {
    return users.map((user, index) => {
      if (user._id === id) return <div></div>;
      return (
        <li key={user._id} className="search-panel-dropdown-detail">
          <div className="search-panel-dropdown-detail__ava">
            <img src={user.avatar} alt=""></img>
          </div>
          <div className="search-panel-dropdown-detail__text">
            {user.userName}
          </div>
          <div className="search-panel-dropdown-detail__icon">
            {user.relationship === "none" ? (
              <AddFriend index={index} user={user} />
            ) : user.relationship === "friend" ? (
              <Friend index={index} user={user} />
            ) : user.relationship === "pending" ? (
              <Pending index={index} user={user} />
            ) : user.relationship === "accept" ? (
              <Accept index={index} user={user} />
            ) : (
              <div />
            )}
          </div>
        </li>
      );
    });
  };

  return (
    <ul className="search-panel-dropdown">
      {/* {render()} */}
      <li className="search-panel-dropdown-detail">
        <div className="search-panel-dropdown-detail__ava">
          <img
            src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/74965416_2602107036685799_7781481069533986816_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=ussR38Q24hEAX-OjgzK&_nc_ht=scontent-hkt1-1.xx&oh=113b6d6c4753402e39bd7054134526ca&oe=5F6BBC89"
            alt=""
          ></img>
        </div>
        <div className="search-panel-dropdown-detail__text">Trung Hoang</div>
        <div className="search-panel-dropdown-detail__icon">
          <AddFriend />
          {/* {user.relationship === "none" ? (
            <AddFriend index={index} user={user} />
          ) : user.relationship === "friend" ? (
            <Friend index={index} user={user} />
          ) : user.relationship === "pending" ? (
            <Pending index={index} user={user} />
          ) : user.relationship === "accept" ? (
            <Accept index={index} user={user} />
          ) : (
            <div />
          )} */}
        </div>
      </li>
      <li className="search-panel-dropdown-detail">
        <div className="search-panel-dropdown-detail__ava">
          <img
            src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/73022632_2493412470694428_1705595207606599680_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=Ux_riR7fJu0AX-z9Mig&_nc_ht=scontent-hkt1-1.xx&oh=2febc097a4891c6bf1e1886ff6e42ea4&oe=5F6BAAB5"
            alt=""
          ></img>
        </div>
        <div className="search-panel-dropdown-detail__text">Tra Hoang</div>
        <div className="search-panel-dropdown-detail__icon">
          <Friend />
          {/* {user.relationship === "none" ? (
            <AddFriend index={index} user={user} />
          ) : user.relationship === "friend" ? (
            <Friend index={index} user={user} />
          ) : user.relationship === "pending" ? (
            <Pending index={index} user={user} />
          ) : user.relationship === "accept" ? (
            <Accept index={index} user={user} />
          ) : (
            <div />
          )} */}
        </div>
      </li>
      <li className="search-panel-dropdown-detail">
        <div className="search-panel-dropdown-detail__ava">
          <img
            src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/p100x100/95989818_156403805868558_4626954296452186112_n.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_ohc=Q8gq-lUMhwcAX9SxX_Q&_nc_ht=scontent-hkt1-1.xx&tp=6&oh=2176adaa22a5847db03a12294c3be6c2&oe=5F6C5B1D"
            alt=""
          ></img>
        </div>
        <div className="search-panel-dropdown-detail__text">TrAnh BuiNgoc</div>
        <div className="search-panel-dropdown-detail__icon">
          <Pending />
          {/* {user.relationship === "none" ? (
            <AddFriend index={index} user={user} />
          ) : user.relationship === "friend" ? (
            <Friend index={index} user={user} />
          ) : user.relationship === "pending" ? (
            <Pending index={index} user={user} />
          ) : user.relationship === "accept" ? (
            <Accept index={index} user={user} />
          ) : (
            <div />
          )} */}
        </div>
      </li>
      <li className="search-panel-dropdown-detail">
        <div className="search-panel-dropdown-detail__ava">
          <img
            src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/p100x100/76756934_1491244441028421_7029544291571597312_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=d0AzrBDjNosAX-Ks32h&_nc_ht=scontent-hkt1-1.xx&tp=6&oh=88e378d540e69e79dd6e2e687532142b&oe=5F69C1EE"
            alt=""
          ></img>
        </div>
        <div className="search-panel-dropdown-detail__text">Van Truong</div>
        <div className="search-panel-dropdown-detail__icon">
          <Accept />
          {/* {user.relationship === "none" ? (
            <AddFriend index={index} user={user} />
          ) : user.relationship === "friend" ? (
            <Friend index={index} user={user} />
          ) : user.relationship === "pending" ? (
            <Pending index={index} user={user} />
          ) : user.relationship === "accept" ? (
            <Accept index={index} user={user} />
          ) : (
            <div />
          )} */}
        </div>
      </li>
    </ul>
  );
};

export default SearchDropDown;
