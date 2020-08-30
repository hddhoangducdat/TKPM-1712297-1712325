/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import GroupInfo from "./groupInfo";
import GroupStatus from "./groupStatus";

import { ReactComponent as BackIcon } from "../../asset/img/icon/back.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  REMOVE_GROUP_DETAIL,
  DEADLINE_ON,
  GROUP_DETAIL_OFF,
  GROUP_INVITE_ON,
} from "../../store/value";
import nested from "../../utils/nested";

const GroupDetail = () => {
  const { group } = useSelector((state) => state);
  const { id } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="group-page-home">
      <div className="group-page-home-back">
        <a
          href="#"
          onClick={() => {
            dispatch({ type: REMOVE_GROUP_DETAIL });
            dispatch({ type: GROUP_DETAIL_OFF });
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
              {group.groupName}
            </div>
            <div className="group-page-home-header__info__subtext">
              {nested(group.data, "member") ? group.data.member.length : 0}{" "}
              members
            </div>
          </div>
          <div className="group-page-home-header__info__right">
            {id === group.admin ? (
              <button
                className="group-page-home-header__info__button group-page-home-header__info__button__red"
                onClick={() => {
                  dispatch({ type: DEADLINE_ON });
                }}
              >
                + deadline
              </button>
            ) : (
              <div />
            )}

            <button
              className="group-page-home-header__info__button"
              onClick={() => {
                dispatch({ type: GROUP_INVITE_ON });
              }}
            >
              + invite
            </button>
          </div>
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
