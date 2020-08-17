import React from "react";

import Pic1 from "../../asset/img/tmp/pic1.jpeg";
import Pic2 from "../../asset/img/tmp/pic2.jpg";
import Pic3 from "../../asset/img/tmp/pic3.jpg";

import Ava1 from "../../asset/img/tmp/ava1.jpg";
import Ava2 from "../../asset/img/tmp/ava2.jpg";
import Ava3 from "../../asset/img/tmp/ava3.jpg";

const Profile = () => {
  const avatar =
    "https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/54463133_104992784011639_7082721617398202368_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=ht0FRvu93dUAX9fOwpS&_nc_ht=scontent.fsgn5-3.fna&oh=307554ab6ac7c4eac335bc78a2d35073&oe=5F54C6B3";

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          className="image-cover"
          src="https://i.pinimg.com/originals/ef/7f/b1/ef7fb1b37078b6a2aef8e40710446bfa.jpg"
          alt=""
          width="100%"
        ></img>
        <div class="avatar-upload">
          <div class="avatar-edit">
            <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
            <label for="imageUpload"></label>
          </div>
          <div class="avatar-preview">
            <div
              id="imagePreview"
              style={{ backgroundImage: "url(" + `${avatar}` + ")" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="profile-info">
        <h2 className="profile-info-name">Hoàng Đức Đạt</h2>
        <p className="profile-info-number_address">0981831448 - tp.HCM</p>

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

export default Profile;
