import React, { useState, useEffect } from "react";

import { connect, useSelector, useDispatch } from "react-redux";

import NavBar from "../../components/nav/navBar";

import { ReactComponent as GroupIcon } from "../../asset/img/icon/group.svg";
import { ReactComponent as LogOutIcon } from "../../asset/img/icon/logout.svg";
import { ReactComponent as CalendarIcon } from "../../asset/img/icon/calendar.svg";
import { ReactComponent as BellIcon } from "../../asset/img/icon/bell.svg";
import { ReactComponent as HomeIcon } from "../../asset/img/icon/construction.svg";
import sound from "../../asset/sound/swiftly.mp3";
import notiSound from "../../asset/sound/ios_notification.mp3";

import { logout, saveNoti } from "../../store/actions";

import Home from "../main/home";
import Notification from "../main/notification";
import Group from "../main/group";
import Calendar from "../main/calendar";
import io from "socket.io-client";
import nested from "../../utils/nested";

import {
  SET_NOTI_SOCKET,
  RENDER_NOTI,
  ADD_GROUP,
  UPDATE_MESSAGE_NOTI,
  SAVE_STATUS,
  ADD_DEADLINE,
} from "../../store/value";
import history from "../../../history";

let socket;

const Middle = ({ logout, saveNoti }) => {
  const { id } = useSelector((state) => state.auth);
  const { noti } = useSelector((state) => state.auth.user);

  const [render, setRender] = useState(<Home />);
  const ENDPOINT = "localhost:5000";
  const [tab, setTab] = useState([
    "nav-tab-detail nav-tab-color",
    "nav-tab-detail",
    "nav-tab-detail",
    "nav-tab-detail",
    "nav-tab-detail",
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit(`noti`, id);

    dispatch({ type: SET_NOTI_SOCKET, payload: socket });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ENDPOINT, id]);

  useEffect(() => {
    socket.on("receive-noti", (noti) => {
      if (nested(noti, "type")) {
        new Audio(sound).play();
        dispatch({ type: RENDER_NOTI, payload: noti });
      } else if (nested(noti, "contain")) {
        dispatch({ type: ADD_GROUP, payload: noti.contain });
      } else if (nested(noti, "status")) {
        dispatch({ type: SAVE_STATUS, payload: noti.status });
      } else if (nested(noti, "deadline")) {
        dispatch({ type: ADD_DEADLINE, payload: noti.deadline });
      } else {
        new Audio(notiSound).play();
        dispatch({ type: UPDATE_MESSAGE_NOTI, payload: noti });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
              <div className="nav-tab-detail-noti">
                <p>{noti}</p>
              </div>
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

      <div className="main-container">{render}</div>
    </div>
  );
};

export default connect(null, { logout, saveNoti })(Middle);
