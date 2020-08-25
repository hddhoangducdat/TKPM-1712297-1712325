import React from "react";
import { getGroup } from "../../store/actions";
import { connect, useSelector, useDispatch } from "react-redux";
import { GET_GROUP_DETAIL } from "../../store/value";

const GroupList = ({ setDetail }) => {
  const groupList = useSelector((state) => {
    return state.auth.user.chatBox.filter((c) => {
      return c.groupId !== "none";
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
              className="group-page-card-detail"
              onClick={() => {
                dispatch({ type: GET_GROUP_DETAIL, payload: g });
                setDetail(true);
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
      {/* 
      <li className="group-page-card-detail">
        <div className="group-page-card-detail__img">
          <img
            src="https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-9/s960x960/117831682_10158960007773463_2252690416948587424_o.jpg?_nc_cat=105&_nc_sid=e3f864&_nc_ohc=rGdUVwFauQwAX8BLjJP&_nc_ht=scontent.fsgn5-1.fna&tp=7&oh=102cf4b29bd173b342dca68bfe438672&oe=5F6C3674"
            alt=""
          />
        </div>
        <div className="group-page-card-detail__info">
          <div className="group-page-card-detail__info__text">NBA</div>
          <div className="group-page-card-detail__info__subtext">
            35.325 members
          </div>
        </div>
        <button className="group-page-card-detail__button">Leave</button>
      </li>
      <li className="group-page-card-detail">
        <div className="group-page-card-detail__img">
          <img
            src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/s960x960/116423115_2656242891309923_1062673430239714532_o.jpg?_nc_cat=102&_nc_sid=825194&_nc_ohc=KvZZ4whQCPIAX_QqWO3&_nc_ht=scontent-hkt1-1.xx&tp=7&oh=5988a9184822d8cca9686e034e791505&oe=5F6AC397"
            alt=""
          />
        </div>
        <div className="group-page-card-detail__info">
          <div className="group-page-card-detail__info__text">
            Thầy Tùng IELTS
          </div>
          <div className="group-page-card-detail__info__subtext">
            135.325 members
          </div>
        </div>
        <button className="group-page-card-detail__button">Leave</button>
      </li> */}
    </ul>
  );
};

export default connect(null, { getGroup })(GroupList);
