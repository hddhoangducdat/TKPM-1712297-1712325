import React from "react";
import { getGroup } from "../../store/actions";
import { connect, useSelector, useDispatch } from "react-redux";
import nested from "../../utils/nested";
import { GROUP_DETAIL_ON } from "../../store/value";

const GroupList = ({ getGroup }) => {
  const groupList = useSelector((state) => {
    return state.auth.user.chatBox.filter((c) => {
      return nested(c, "groupId") && c.groupId !== "none" && c.groupId !== "";
    });
  });
  const dispatch = useDispatch();

  return (
    <ul className="group-page-card">
      <input
        className="group-page-card-input"
        placeholder="Search your specific group"
      ></input>
      {groupList instanceof Array ? (
        groupList.map((g) => {
          return (
            <li
              key={g.groupId}
              className="group-page-card-detail"
              onClick={() => {
                getGroup(g);
                // dispatch({ type: GET_GROUP_DETAIL, payload: g });
                // setDetail(true);
                dispatch({ type: GROUP_DETAIL_ON });
              }}
            >
              <div className="group-page-card-detail__img">
                <img src={g.avatar} alt="" />
              </div>
              <div className="group-page-card-detail__info">
                <div className="group-page-card-detail__info__text">
                  {g.name}
                </div>
                <div className="group-page-card-detail__info__subtext">
                  {g.member} members
                </div>
              </div>
              <button className="group-page-card-detail__button">Leave</button>
            </li>
          );
        })
      ) : (
        <div></div>
      )}
    </ul>
  );
};

export default connect(null, { getGroup })(GroupList);
