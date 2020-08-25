import React from "react";
import { getGroup } from "../../store/actions";
import { connect, useSelector } from "react-redux";
import nested from "../../utils/nested";

const GroupList = ({ setDetail, getGroup }) => {
  const { groupList } = useSelector((state) => {
    return state.auth.user.chatBox.filter((c) => nested(c, "groupId"));
  });

  return (
    <ul className="group-page-card">
      <input
        className="group-page-card-input"
        placeholder="Search your specific group"
      ></input>
      {groupList.map((g) => {
        return (
          <li
            className="group-page-card-detail"
            onClick={() => setDetail(true)}
          >
            <div className="group-page-card-detail__img">
              <img src={g.avatar} alt="" />
            </div>
            <div className="group-page-card-detail__info">
              <div className="group-page-card-detail__info__text">{g.name}</div>
              <div className="group-page-card-detail__info__subtext">
                {g.member}
              </div>
            </div>
            <button className="group-page-card-detail__button">Leave</button>
          </li>
        );
      })}
      <li className="group-page-card-detail" onClick={() => setDetail(true)}>
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
  );
};

export default connect({ getGroup })(GroupList);
