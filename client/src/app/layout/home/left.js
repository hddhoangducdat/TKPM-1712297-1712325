import React from "react";

import NavBar from "../../components/nav/navBar";
import logo from "../../asset/icons/icon.png";
import Profile from "../profile";

const Left = () => {
  return (
    <div className="profile-container">
      <NavBar>
        <div className="logo-container">
          <img src={logo} alt="" width="30px" height="30px" />
        </div>
        <div className="search-panel">
          <img
            className="search-panel-icon"
            src="https://img.icons8.com/nolan/64/search.png"
          />
          <input
            className="search-panel-input"
            placeholder="Search Connect..."
            type="email"
          ></input>
        </div>
      </NavBar>

      <Profile />
    </div>
  );
};

export default Left;
