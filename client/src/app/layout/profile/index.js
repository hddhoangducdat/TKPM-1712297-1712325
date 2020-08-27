import React from "react";
import { useSelector, connect } from "react-redux";

import Pic1 from "../../asset/img/tmp/pic1.jpeg";
import Pic2 from "../../asset/img/tmp/pic2.jpg";
import Pic3 from "../../asset/img/tmp/pic3.jpg";

import Ava1 from "../../asset/img/tmp/ava1.jpg";
import Ava2 from "../../asset/img/tmp/ava2.jpg";
import Ava3 from "../../asset/img/tmp/ava3.jpg";

import { uploadAvatar } from "../../store/actions";

const Profile = ({ uploadAvatar }) => {
  const { user } = useSelector((state) => state.auth);

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
        <div className="profile-info-picture">
          <img src={Pic1} alt="" />
          <img src={Pic2} alt="" />
          <img src={Pic3} alt="" />
          <div className="profile-info-picture-more">
            <div className="profile-info-picture-more-content">+123</div>
          </div>
        </div>

        <div className="profile-info-friend">
          <h3 className="profile-info-title">Friends</h3>
        </div>
        <div className="profile-info-picture">
          <img src={Ava1} alt="" />
          <img src={Ava2} alt="" />
          <img src={Ava3} alt="" />
          <div className="profile-info-picture-more profile-info-picture-friend">
            <div className="profile-info-picture-more-content">+8600</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { uploadAvatar })(Profile);
