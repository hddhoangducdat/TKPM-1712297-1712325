/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ReactComponent as CancleIcon } from "../../asset/img/icon/closedrop.svg";
import { ReactComponent as AcceptIcon } from "../../asset/img/icon/yes.svg";

import { deleteRela, acceptFriend } from "../../store/actions";
import { connect } from "react-redux";

const Accept = ({ index, user, deleteRela, acceptFriend }) => {
  return (
    <div>
      <a
        className="search-panel-dropdown-detail__icon__pending"
        href="#"
        onClick={() => acceptFriend(user, index)}
      >
        <AcceptIcon />
      </a>
      <a
        className="search-panel-dropdown-detail__icon__cancle"
        href="#"
        onClick={() => deleteRela(user, index)}
      >
        <CancleIcon />
      </a>
    </div>
  );
};

export default connect(null, { deleteRela, acceptFriend })(Accept);
