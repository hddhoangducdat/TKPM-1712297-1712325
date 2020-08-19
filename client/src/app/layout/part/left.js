import React from "react";

import NavBar from "../../components/nav/navBar";
import logo from "../../asset/icons/icon.png";
import Profile from "../profile";

const Left = () => {
  return (
    <div className="profile-container">
      <NavBar>
        <div className="logo-container">
          <img src={logo} alt="" width="40px" height="40px" />
        </div>
        <div className="search-panel">
          <input
            className="search-panel-input"
            placeholder="Search Connect..."
            type="email"
          ></input>

          <img
            className="search-panel-icon"
            src="https://img.icons8.com/nolan/64/search.png"
          />
        </div>
      </NavBar>

      <Profile />
    </div>
  );
};

export default Left;
