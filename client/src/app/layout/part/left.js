import React, { useState } from "react";
import { connect } from "react-redux";

import NavBar from "../../components/nav/navBar";
import logo from "../../asset/icons/icon.png";
import Profile from "../profile";
import SearchDropDown from "../../components/dropdown/searchDropDown";
import { ReactComponent as SearchIcon } from "../../asset/img/icon/search.svg";
import { ReactComponent as CloseIcon } from "../../asset/img/icon/multiply.svg";

import { searchUser } from "../../store/actions";

const Left = ({ searchUser }) => {
  const [change, setChange] = useState("");

  return (
    <div className="profile-container">
      <NavBar>
        <div className="logo-container">
          <img src={logo} alt="" width="40px" height="40px" />
        </div>
        <div className="search-panel">
          <input
            value={change}
            className={
              change !== ""
                ? "search-panel-input search-panel-onchange"
                : "search-panel-input"
            }
            placeholder="Search Connect..."
            type="email"
            onChange={(e) => {
              setChange(e.target.value);
              searchUser(e.target.value);
            }}
          ></input>

          <a className="search-panel-icon" href="#">
            {change !== "" ? (
              <CloseIcon onClick={() => setChange("")} />
            ) : (
              <SearchIcon />
            )}
          </a>

          {change !== "" ? <SearchDropDown /> : <div />}
        </div>
      </NavBar>

      <Profile />
    </div>
  );
};

export default connect(null, { searchUser })(Left);
