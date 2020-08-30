import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  ADD_FRIEND_TO_GROUP,
  REMOVE_FRIEND_FROM_GROUP,
  GROUP_INVITE_ON,
  GROUP_INVITE_OFF,
  ADD_NEW_MEMBER,
} from "../../store/value";

import { getFriends, addNewMember } from "../../store/actions";

import { ReactComponent as PlusIcon } from "../../asset/img/icon/plus.svg";
import { ReactComponent as TickIcon } from "../../asset/img/icon/tick1.svg";
import { ReactComponent as CancleIcon } from "../../asset/img/icon/close.svg";

const GroupAddMember = ({ getFriends, addNewMember }) => {
  const { friend } = useSelector((state) => state);
  const { member } = useSelector((state) => state.group.data);
  const [newMember, setNewMember] = useState("");
  const [noti, setNoti] = useState("Add new member to Group");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  // get listFiend
  useEffect(() => {
    getFriends();
  }, [1]);

  return (
    <div className="middle-blur">
      <div className="middle-blur-sub">
        <div
          className="middle-blur-focus-out"
          onClick={() => {
            dispatch({ type: GROUP_INVITE_OFF });
          }}
        ></div>
        <div className="post-input">
          <div className="post-input-header">
            <div className="post-input-header__text">{noti}</div>
          </div>

          <input
            className="post-group-input"
            type="text"
            value={text}
            placeholder="Search for friends to join you"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />

          <ul className="friend-list">
            {friend instanceof Array ? <div>haha</div> : <div></div>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { getFriends, addNewMember })(GroupAddMember);
