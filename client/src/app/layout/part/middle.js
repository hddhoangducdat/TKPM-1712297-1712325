import React, { useState } from "react";

import { connect } from "react-redux";

import NavBar from "../../components/nav/navBar";

import { ReactComponent as GroupIcon } from "../../asset/img/icon/group.svg";
import { ReactComponent as LogOutIcon } from "../../asset/img/icon/logout.svg";
import { ReactComponent as CalendarIcon } from "../../asset/img/icon/calendar.svg";
import { ReactComponent as BellIcon } from "../../asset/img/icon/bell.svg";
import { ReactComponent as HomeIcon } from "../../asset/img/icon/construction.svg";

import { logout } from "../../store/actions";

import Home from "../main/home";
import Notification from "../main/notification";
import Group from "../main/group";
import Calendar from "../main/calendar";

const Middle = ({ logout }) => {
  const [render, setRender] = useState(<Home />);
  const [tab, setTab] = useState([
    "nav-tab-detail nav-tab-color",
    "nav-tab-detail",
    "nav-tab-detail",
    "nav-tab-detail",
    "nav-tab-detail",
  ]);

  const colorTab = (x) => {
    setTab(
      tab.map((t, index) => {
        return x === index ? "nav-tab-detail nav-tab-color" : "nav-tab-detail";
      })
    );
    // console.log(tab);
  };

  return (
    <div>
      <NavBar>
        <div className="nav">
          <ul className="nav-tab">
            <li
              className={tab[0]}
              onClick={(e) => {
                colorTab(0);
                setRender(<Home />);
              }}
            >
              <HomeIcon />
            </li>
            <li
              className={tab[1]}
              onClick={(e) => {
                colorTab(1);
                setRender(<Calendar />);
              }}
            >
              <CalendarIcon />
            </li>
            <li
              className={tab[2]}
              onClick={() => {
                colorTab(2);
                setRender(<Group />);
              }}
            >
              <GroupIcon />
            </li>
            <li
              className={tab[3]}
              onClick={() => {
                colorTab(3);
                setRender(<Notification />);
              }}
            >
              <BellIcon />
              <div className="nav-tab-detail-noti">3</div>
            </li>
            <li
              className={tab[4]}
              onClick={() => {
                colorTab(4);
                logout();
              }}
            >
              <LogOutIcon />
            </li>
          </ul>
        </div>
      </NavBar>

      <div className="main-container">
        {/* <Home /> */}
        {/* <Notification /> */}
        {/* <Group /> */}
        {/* <Calendar /> */}

        {render}
      </div>

      {/* <div className="main-footer"></div> */}
    </div>
  );
};

export default connect(null, { logout })(Middle);
