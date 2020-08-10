import React from "react";

import NavBar from "../../components/nav/navBar";
import logo from "../../asset/icons/icon.png";

const Left = () => {
  return (
    <NavBar>
      <div className="logo-container">
        <img src={logo} alt="" width="30px" height="30px" />
      </div>
      <input
        className="search-panel"
        placeholder="Search Connect..."
        type="email"
      ></input>
    </NavBar>
  );
};

export default Left;
