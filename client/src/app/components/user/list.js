import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser, getChatDialog } from "../../store/actions";
import _ from "lodash";

const UserList = ({ getUser, setClickChat, list, getChatDialog, userId }) => {
  useEffect(() => {
    getUser();
  }, []);

  const onClickUser = (id) => {
    console.log(id);
    getChatDialog(userId, id, setClickChat);
  };

  const showListUser = () => {
    if (!_.isEmpty(list)) {
      return list.map((l) => {
        return (
          <div
            key={l._id}
            onClick={onClickUser.bind(this, l._id)}
            // onClick={onClickUser(l._id)}
          >
            {l.data.fullName}
          </div>
        );
      });
    }
  };

  return <div>{showListUser()}</div>;
};

const mapStateToProps = (state) => {
  return {
    list: state.user.list,
    userId: state.auth.id,
  };
};

export default connect(mapStateToProps, { getUser, getChatDialog })(UserList);
