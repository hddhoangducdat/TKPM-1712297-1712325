import React from "react";

import NavBar from "../../components/nav/navBar";

import { ReactComponent as MessengerIcon } from "../../asset/icons/messenger.svg";

import Messenger from "../messenger";

const Right = () => {
  return (
    <div className="right">
      <NavBar>
        <div className="messenger-bar">
          <li className="nav-item">
            <a href="#j" className="icon-button">
              <MessengerIcon />
            </a>
          </li>
          <p>Messenger</p>
          <div className="dot-icon">...</div>
        </div>
      </NavBar>

      <Messenger />
    </div>
  );
};

export default Right;
