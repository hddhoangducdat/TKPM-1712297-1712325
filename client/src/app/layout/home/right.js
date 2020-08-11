import React from "react";

import NavBar from "../../components/nav/navBar";
import NavItem from "../../components/nav/navItem";

import dot from "../../asset/icons/dot.png";
import dotIcon from "../../asset/icons/dot.svg";

const Right = () => {
  return (
    <NavBar>
      <div className="messenger-bar">
        {/* <NavItem icon={<MessengerIcon />} /> */}
        <p>Messenger</p>
        <img src={dotIcon} alt="" width="30x" height="30px" />
      </div>
    </NavBar>
  );
};

export default Right;
