/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ReactComponent as FriendIcon } from "../../asset/img/icon/hug.svg";
import { ReactComponent as UnFriendIcon } from "../../asset/img/icon/delete.svg";

import { deleteRela } from "../../store/actions";
import { connect } from "react-redux";

const Friend = ({ index, user, deleteRela }) => {
  return (
    <div>
      <a className="search-panel-dropdown-detail__icon__friend" href="#">
        <FriendIcon />
      </a>
      <a
        className="search-panel-dropdown-detail__icon__cancle"
        href="#"
        onClick={() => deleteRela(user, index)}
      >
        <UnFriendIcon />
      </a>
    </div>
  );
};

export default connect(null, { deleteRela })(Friend);
