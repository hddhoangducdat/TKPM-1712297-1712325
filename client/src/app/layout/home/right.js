import React from "react";

import NavBar from "../../components/nav/navBar";

import dot from "../../asset/icons/dot.png";

const Right = () => {
  return (
    <NavBar>
      <div className="messenger-bar">
        {/* <NavItem icon={<MessengerIcon />} /> */}
        <p>Messenger</p>

        <img src={dot} alt="" width="100px" height="100px" />
      </div>
    </NavBar>
  );
};

export default Right;
