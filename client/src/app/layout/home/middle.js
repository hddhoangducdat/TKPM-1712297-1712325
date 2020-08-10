import React from "react";

import NavBar from "../../components/nav/navBar";
import NavItem from "../../components/nav/navItem";

import { ReactComponent as PlusIcon } from "../../asset/icons/plus.svg";
import { ReactComponent as BellIcon } from "../../asset/icons/bell.svg";
import { ReactComponent as MessengerIcon } from "../../asset/icons/messenger.svg";
import DropDownMenu from "../../components/dropdown/dropDownMenu";

const Middle = () => {
  return (
    <NavBar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<MessengerIcon />}>
        <DropDownMenu />
      </NavItem>
      <NavItem icon={<BellIcon />} />

      <div className="nav-profile"></div>
      <div className="padding-nav" />
    </NavBar>
  );
};

export default Middle;
