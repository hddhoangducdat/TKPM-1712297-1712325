/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ReactComponent as PendingIcon } from "../../asset/img/icon/clock.svg";
import { ReactComponent as CancleIcon } from "../../asset/img/icon/closedrop.svg";

import { deleteRela } from "../../store/actions";
import { connect } from "react-redux";

const Pending = ({ index, user, deleteRela }) => {
  return (
    <div>
      <a className="search-panel-dropdown-detail__icon__pending" href="#">
        <PendingIcon />
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

export default connect(null, { deleteRela })(Pending);
