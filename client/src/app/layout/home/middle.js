import React from "react";

import NavBar from "../../components/nav/navBar";
import NavItem from "../../components/nav/navItem";

import { ReactComponent as PlusIcon } from "../../asset/icons/plus.svg";
import { ReactComponent as BellIcon } from "../../asset/icons/bell.svg";
import { ReactComponent as MessengerIcon } from "../../asset/icons/messenger.svg";
import DropDownMenu from "../../components/dropdown/dropDownMenu";

const Middle = () => {
  const avatar =
    "https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/54463133_104992784011639_7082721617398202368_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=ht0FRvu93dUAX9fOwpS&_nc_ht=scontent.fsgn5-3.fna&oh=307554ab6ac7c4eac335bc78a2d35073&oe=5F54C6B3";

  return (
    <NavBar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<MessengerIcon />}>
        <DropDownMenu />
      </NavItem>
      <NavItem icon={<BellIcon />} />

      <div className="profile-panel">
        <div className="avatar-panel">
          <div
            id="imagePreview"
            style={{ backgroundImage: "url(" + `${avatar}` + ")" }}
          ></div>
        </div>
        <span>Đạt</span>
      </div>

      <div className="padding-nav" />
    </NavBar>
  );
};

export default Middle;
