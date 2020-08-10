import React from "react";

import Left from "../layout/home/left";
import Middle from "../layout/home/middle";
import Right from "../layout/home/right";

const Home = () => {
  return (
    <div className="home-container">
      <div className="grid">
        <Left />
      </div>
      <div className="grid">
        <Middle />
      </div>
      <div className="grid">
        <Right />
      </div>
    </div>
  );
};

export default Home;
