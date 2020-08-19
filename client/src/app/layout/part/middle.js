import React from "react";

import NavBar from "../../components/nav/navBar";

import { ReactComponent as GroupIcon } from "../../asset/img/icon/group.svg";
import { ReactComponent as AssignmentIcon } from "../../asset/img/icon/assignment.svg";
import { ReactComponent as CalendarIcon } from "../../asset/img/icon/calendar.svg";
import { ReactComponent as BellIcon } from "../../asset/img/icon/bell.svg";
import { ReactComponent as HomeIcon } from "../../asset/img/icon/construction.svg";

import Home from "../main/home";

const Middle = () => {
  return (
    <div>
      <NavBar>
        <div className="nav">
          <ul className="nav-tab">
            <li className="nav-tab-detail nav-tab-color">
              <HomeIcon />
            </li>
            <li className="nav-tab-detail">
              <CalendarIcon />
            </li>
            <li className="nav-tab-detail">
              <GroupIcon />
            </li>
            <li className="nav-tab-detail">
              <BellIcon />
              <div className="nav-tab-detail-noti">3</div>
            </li>
            <li className="nav-tab-detail">
              <AssignmentIcon />
            </li>
          </ul>
        </div>
      </NavBar>

      <div className="main-container">
        <Home />
      </div>

      {/* <div className="main-footer"></div> */}
    </div>
  );
};

export default Middle;
