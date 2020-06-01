import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";

//Css
import "../../css/profile/profile.css";

// Action

import {
  addFriend,
  getRequest,
  cancleRequest,
  acceptFriend,
  unFriend,
  getUserListAndUpadte,
  getCurrentUser,
} from "../../store/actions";

let socket;
let socketOwner;

const Card = ({
  profile,
  userId,
  friend,
  addFriend,
  acceptFriend,
  getRequest,
  request,
  cancleRequest,
  getCurrentUser,
  unFriend,
}) => {
  const [renderRequest, setRenderRequest] = useState(
    <button className="button">Edit</button>
  );

  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    getRequest(userId, profile._id);
    // getCurrentUser();
    // getUserListAndUpadte(userId);
  });

  useEffect(() => {
    socket = io(ENDPOINT);
    socketOwner = io(ENDPOINT);

    socketOwner.emit("request", profile._id + userId);
    socket.emit("request", userId + profile._id);

    socket.on("acceptFriend", (data) => {
      setRenderRequest(() => {
        console.log(data);
        return (
          <div>
            <button className="button-chat">Chat</button>
            <button className="button-unFriend" onClick={onClickUnFriend}>
              GoodBye!!!
            </button>
          </div>
        );
      });
    });

    socket.on("addFriend", () => {
      setRenderRequest(() => {
        return (
          <div>
            <button onClick={onClickAcceptFriend} className="button-accept">
              Accept friend request
            </button>
            <button onClick={onClickForgetIt} className="button-cancle">
              Forget it !!!
            </button>
          </div>
        );
      });
    });

    socket.on("cancleRequest", () => {
      setRenderRequest(() => {
        return (
          <button onClick={onClickAdd} className="button-add">
            Add Friend
          </button>
        );
      });
    });

    socket.on("unFriend", () => {
      setRenderRequest(() => {
        return (
          <button onClick={onClickAdd} className="button-add">
            Add Friend
          </button>
        );
      });
    });
  }, [profile._id]);

  const onClickAdd = () => {
    addFriend(userId, profile._id);
    socketOwner.emit("sendRequest", {
      id: profile._id + userId,
      type: "addFriend",
    });
    setRenderRequest(<button className="button-pending">Pending</button>);
  };

  const onClickForgetIt = () => {
    cancleRequest(request._id);
    socketOwner.emit("sendRequest", {
      id: profile._id + userId,
      type: "cancleRequest",
    });
    setRenderRequest(
      <button onClick={onClickAdd} className="button-add">
        Add Friend
      </button>
    );
  };

  const onClickAcceptFriend = () => {
    acceptFriend(request._id, userId, profile._id, socketOwner);

    setRenderRequest(
      <div>
        <button className="button-chat">Chat</button>
        <button className="button-unFriend" onClick={onClickUnFriend}>
          GoodBye!!!
        </button>
      </div>
    );
  };

  const onClickUnFriend = () => {
    unFriend(userId, profile._id);
    socketOwner.emit("sendRequest", {
      id: profile._id + userId,
      type: "unFriend",
    });
    setRenderRequest(
      <button onClick={onClickAdd} className="button-add">
        Add Friend
      </button>
    );
  };

  useEffect(() => {
    if (userId === profile._id) {
      return setRenderRequest(<button className="button">Edit</button>);
    } else {
      setRenderRequest(() => {
        if (request) {
          socket.emit("joinRequest", request._id);
          if (userId === request.from) {
            return <button className="button-pending">Pending</button>;
          } else {
            return (
              <div>
                <button onClick={onClickAcceptFriend} className="button-accept">
                  Accept friend request
                </button>
                <button onClick={onClickForgetIt} className="button-cancle">
                  Forget it !!!
                </button>
              </div>
            );
          }
        }

        if (friend.includes(profile._id)) {
          return (
            <div>
              <button className="button-chat">Chat</button>
              <button className="button-unFriend" onClick={onClickUnFriend}>
                GoodBye!!!
              </button>
            </div>
          );
        }
        return (
          <button onClick={onClickAdd} className="button-add">
            Add Friend
          </button>
        );
      });
    }
  }, [profile, request]);

  return (
    <div className="card">
      <img src={profile.data.avatar} alt="John" style={{ width: "100%" }} />
      <h1>{profile.data.fullName}</h1>
      <p>{profile.data.email}</p>
      <p className="title">CEO & Founder, Example</p>
      <p>Harvard University</p>
      <p>{renderRequest}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.id,
    friend: state.auth.user.data.friend,
    request: state.request,
  };
};

export default connect(mapStateToProps, {
  addFriend,
  getRequest,
  cancleRequest,
  acceptFriend,
  getCurrentUser,
  unFriend,
})(Card);
