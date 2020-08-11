import React from "react";

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
      <h1>haha</h1>
    </div>
  );
};

export default Profile;
