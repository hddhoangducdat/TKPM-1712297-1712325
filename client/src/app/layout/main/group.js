/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import { ReactComponent as AddGroupIcon } from "../../asset/icons/add-group.svg";

import { useDispatch } from "react-redux";
import { GROUP_ON } from "../../store/value";
import GroupList from "../../components/group/groupList";
import GroupDetail from "../../components/group/groupDetail";

const Group = () => {
  const [detail, setDetail] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="group-page">
      <div className="group-page-add">
        <a
          href="#"
          onClick={() => {
            dispatch({ type: GROUP_ON });
          }}
        >
          <AddGroupIcon />
        </a>
      </div>

      {!detail ? (
        <GroupList setDetail={setDetail} />
      ) : (
        <GroupDetail setDetail={setDetail} />
      )}
    </div>
  );
};

export default Group;
