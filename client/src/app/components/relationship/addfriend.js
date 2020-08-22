/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ReactComponent as AddFriendIcon } from "../../asset/img/icon/add-friend.svg";
import { addFriend } from "../../store/actions";
import { connect } from "react-redux";

const AddFriend = ({ index, id, addFriend }) => {
  return (
    <a
      className="search-panel-dropdown-detail__icon__addfriend"
      href="#"
      onClick={() => addFriend(id, index)}
    >
      <AddFriendIcon />
    </a>
  );
};

export default connect(null, { addFriend })(AddFriend);
