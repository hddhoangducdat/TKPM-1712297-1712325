import React, { useState } from "react";
import DropDownItem from "./dropDownItem";
import { CSSTransition } from "react-transition-group";

import { ReactComponent as CogIcon } from "../../asset/icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../../asset/icons/chevron.svg";

const DropDownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu-container">
          <DropDownItem>My Profile</DropDownItem>
          <DropDownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
            setActiveMenu={setActiveMenu}
          >
            Setting
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu-container">
          <DropDownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="main"
            setActiveMenu={setActiveMenu}
          ></DropDownItem>
          <DropDownItem>My Profile</DropDownItem>
          <DropDownItem>My Profile</DropDownItem>
          <DropDownItem>My Profile</DropDownItem>
          <DropDownItem>My Profile</DropDownItem>
          <DropDownItem>My Profile</DropDownItem>
          <DropDownItem>My Profile</DropDownItem>
          <DropDownItem>My Profile</DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropDownMenu;
