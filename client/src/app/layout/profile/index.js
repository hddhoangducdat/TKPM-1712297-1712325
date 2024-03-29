import React, { useEffect } from "react";
import { useSelector, connect, useDispatch } from "react-redux";

import Pic1 from "../../asset/img/tmp/pic1.jpeg";
import Pic2 from "../../asset/img/tmp/pic2.jpg";
import Pic3 from "../../asset/img/tmp/pic3.jpg";

import Ava1 from "../../asset/img/tmp/ava1.jpg";
import Ava2 from "../../asset/img/tmp/ava2.jpg";
import Ava3 from "../../asset/img/tmp/ava3.jpg";

import { uploadAvatar, getAllFile, getFriends } from "../../store/actions";
import { FILE_MANAGER_ON, FRIEND_MANAGER_ON } from "../../store/value";

const Profile = ({ uploadAvatar }) => {
  const { user, id, file } = useSelector((state) => state.auth);
  const { friend } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFile(id));
    dispatch(getFriends());
  }, [id]);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          className="image-cover"
          src="https://i.pinimg.com/originals/ef/7f/b1/ef7fb1b37078b6a2aef8e40710446bfa.jpg"
          alt=""
          width="100%"
        ></img>
        <div className="avatar-upload">
          <div className="avatar-edit">
            <input
              type="file"
              id="imageUpload"
              accept=".png, .jpg, .jpeg"
              onChange={(e) => {
                console.log(e.target.files);
                uploadAvatar(e.target.files[0]);
              }}
            />
            <label htmlFor="imageUpload"></label>
          </div>
          <div className="avatar-preview">
            <div
              id="imagePreview"
              style={{ backgroundImage: "url(" + `${user.avatar}` + ")" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="profile-info">
        <h2 className="profile-info-name">{user.userName}</h2>
        <p className="profile-info-number_address">
          {user.phoneNumber + " - " + user.email}
        </p>

        <div className="profile-info-photo">
          <h3 className="profile-info-title">Photos</h3>
        </div>
        {file.length === 0 ? (
          <div> NO FILE UPLOAD YET !!! </div>
        ) : file.length === 1 ? (
          <div className="profile-info-picture">
            <img src={file[0].fileUrl} alt="" />
            <div className="profile-info-picture-more">
              <div
                className="profile-info-picture-more-content"
                onClick={() => dispatch({ type: FILE_MANAGER_ON })}
              >
                +{file.length}
              </div>
            </div>
          </div>
        ) : file.length === 2 ? (
          <div className="profile-info-picture">
            <img src={file[0].fileUrl} alt="" />
            <img src={file[1].fileUrl} alt="" />
            <div className="profile-info-picture-more">
              <div
                className="profile-info-picture-more-content"
                onClick={() => dispatch({ type: FILE_MANAGER_ON })}
              >
                +{file.length}
              </div>
            </div>
          </div>
        ) : (
          <div className="profile-info-picture">
            <img src={file[0].fileUrl} alt="" />
            <img src={file[1].fileUrl} alt="" />
            <img src={file[2].fileUrl} alt="" />
            <div className="profile-info-picture-more">
              <div
                className="profile-info-picture-more-content"
                onClick={() => dispatch({ type: FILE_MANAGER_ON })}
              >
                +{file.length}
              </div>
            </div>
          </div>
        )}

        <div className="profile-info-friend">
          <h3 className="profile-info-title">Friends</h3>
        </div>

        {friend.length === 0 ? (
          <div> NO FRIEND YET !!! </div>
        ) : friend.length === 1 ? (
          <div className="profile-info-picture">
            <img src={friend[0].avatar} alt="" />
            <div className="profile-info-picture-more profile-info-picture-friend">
              <div
                className="profile-info-picture-more-content"
                onClick={() => dispatch({ type: FRIEND_MANAGER_ON })}
              >
                +{friend.length}
              </div>
            </div>
          </div>
        ) : friend.length === 2 ? (
          <div className="profile-info-picture">
            <img src={friend[0].avatar} alt="" />
            <img src={friend[1].avatar} alt="" />
            <div className="profile-info-picture-more profile-info-picture-friend">
              <div
                className="profile-info-picture-more-content"
                onClick={() => dispatch({ type: FRIEND_MANAGER_ON })}
              >
                +{friend.length}
              </div>
            </div>
          </div>
        ) : (
          <div className="profile-info-picture">
            <img src={friend[0].avatar} alt="" />
            <img src={friend[1].avatar} alt="" />
            <img src={friend[2].avatar} alt="" />
            <div className="profile-info-picture-more profile-info-picture-friend">
              <div
                className="profile-info-picture-more-content"
                onClick={() => dispatch({ type: FRIEND_MANAGER_ON })}
              >
                +{friend.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default connect(null, { uploadAvatar })(Profile);
