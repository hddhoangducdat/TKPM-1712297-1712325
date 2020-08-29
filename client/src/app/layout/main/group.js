/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import { ReactComponent as AddGroupIcon } from "../../asset/icons/add-group.svg";

import { useDispatch, useSelector } from "react-redux";
import { GROUP_ON } from "../../store/value";
import GroupList from "../../components/group/groupList";
import GroupDetail from "../../components/group/groupDetail";

const Group = ({ detail, setDetail }) => {
  const dispatch = useDispatch();

  const group = useSelector((state) => state.utils.group);

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

      {group === 0 ? <GroupList /> : <GroupDetail />}
    </div>
  );
};

export default Group;
