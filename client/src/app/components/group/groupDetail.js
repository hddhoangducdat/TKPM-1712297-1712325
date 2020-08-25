/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import GroupInfo from "./groupInfo";
import GroupStatus from "./groupStatus";

import { ReactComponent as BackIcon } from "../../asset/img/icon/back.svg";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_GROUP_DETAIL } from "../../store/value";

const GroupDetail = ({ setDetail }) => {
  const { group } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="group-page-home">
      <div className="group-page-home-back">
        <a
          href="#"
          onClick={() => {
            dispatch({ type: REMOVE_GROUP_DETAIL });
            setDetail(false);
          }}
        >
          <BackIcon />
        </a>
      </div>
      <div className="group-page-home-header">
        <div className="group-page-home-header__img">
          <img src={group.avatar} alt="" />
        </div>
        <div className="group-page-home-header__info">
          <div className="group-page-home-header-info__contain">
            <div className="group-page-home-header__info__text">
              {group.name}
            </div>
            <div className="group-page-home-header__info__subtext">
              {group.member}
              134 members
            </div>
          </div>
          <button className="group-page-home-header__info__button">
            + invite
          </button>
        </div>
      </div>
      <div className="group-page-home-main">
        <GroupStatus />
        <GroupInfo />
      </div>
    </div>
  );
};

export default GroupDetail;
