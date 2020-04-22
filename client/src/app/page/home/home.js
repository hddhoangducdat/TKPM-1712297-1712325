import React from "react";
import history from "../../../history";

const home = () => {
  const onLogOut = () => {
    localStorage.removeItem("jwtToken");
    history.push("/");
  };

  return <button onClick={onLogOut}>Log Out</button>;
};

export default home;
