import React from "react";

import "../../app/asset/css/style.css";

import Header from "../layout/auth/header";
import Banner from "../layout/auth/banner";
import Information from "../layout/auth/information";
import Verify from "../layout/auth/verify";

const Auth = () => {
  return (
    <div id="page-wrapper">
      <Header />
      <Banner />
      <Information />
      <Verify />
    </div>
  );
};

export default Auth;
