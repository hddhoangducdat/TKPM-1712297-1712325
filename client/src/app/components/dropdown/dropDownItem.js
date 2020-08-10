import React from "react";

const DropDownItem = ({
  children,
  leftIcon,
  rightIcon,
  goToMenu,
  setActiveMenu,
}) => {
  return (
    <a
      href="#h"
      className="menu-item"
      onClick={() => goToMenu && setActiveMenu(goToMenu)}
    >
      <span className="icon-button">{leftIcon}</span>
      {children}
      <span className="icon-right">{rightIcon}</span>
    </a>
  );
};

export default DropDownItem;
