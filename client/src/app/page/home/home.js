import React, { useState, useEffect } from "react";
import history from "../../../history";
import Chat from "../../components/chat/chat";
import UserList from "../../components/user/list";
import FileChat from "../../components/file/fileChat";
import ProfileCard from "../../components/profile/card";
import _ from "lodash";
import { connect } from "react-redux";

import "../../css/home/home.css";

// Action

import { getUserList } from "../../store/actions";
import CreateGroup from "../../components/group/createGroup";

const Home = ({ getUserList, ok }) => {
  const [profile, setProfile] = useState(false);
  const [file, setFile] = useState([]);
  const [onClickRequest, setOnClickRequest] = useState(false);

  const onLogOut = () => {
    localStorage.removeItem("jwtToken");
    history.push("/");
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <div>
      <div className="split-left-home left-home">
        {ok ? (
          <Chat file={file} setFile={setFile} setProfile={setProfile} />
        ) : (
          ""
        )}
      </div>
      <div className="split-right-home right-home">
        {/* <UserList setClickChat={setClickChat} /> */}
        <button onClick={onLogOut}>Log Out</button>
        <FileChat file={file} setFile={setFile} />
        {profile ? (
          <ProfileCard
            onClickRequest={onClickRequest}
            setOnClickRequest={setOnClickRequest}
            profile={profile}
          />
        ) : (
          ""
        )}
        <CreateGroup />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ok: state.auth.user.data ? true : false,
  };
};

export default connect(mapStateToProps, { getUserList })(Home);
