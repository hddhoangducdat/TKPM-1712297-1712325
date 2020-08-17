import React from "react";
import { ReactComponent as PlusIcon } from "../../asset/img/add-plus-button.svg";

const SearchMessenger = () => {
  return (
    <div className="messenger-search">
      <input
        className="messenger-search-input"
        placeholder="Search Connect..."
        type="email"
      ></input>

      <div className="messenger-search-icon">
        <PlusIcon />
      </div>
    </div>
  );
};

export default SearchMessenger;
