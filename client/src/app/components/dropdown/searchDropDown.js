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

  return <ul className="search-panel-dropdown">{render()}</ul>;
};

export default SearchDropDown;
