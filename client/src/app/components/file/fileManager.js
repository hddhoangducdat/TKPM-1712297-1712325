/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { ReactComponent as CloseIcon } from "../../asset/img/icon/close.svg";
import { FILE_MANAGER_OFF } from "../../store/value";
import { useDispatch } from "react-redux";

const FileManager = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"
  );

  return (
    <div className="middle-blur middle-blur-split">
      <div className="grid-item-image">
        <a
          href="#"
          className="grid-item-image-icon"
          onClick={() => {
            dispatch({ type: FILE_MANAGER_OFF });
          }}
        >
          <CloseIcon />
        </a>
        {true ? <img src={image} alt="" /> : <img src={image} alt="" />}
      </div>
      <div className="grid-item-info picture-manager">
        <div className="picture-manager-header">
          <h1>Hoang Duc Dat</h1>
          <p>File manager with UI</p>
        </div>
        <div className="picture-manager-list">
          <img
            src="https://html5up.net/uploads/demos/lens/images/thumbs/02.jpg"
            alt=""
          />
          <img
            src="https://html5up.net/uploads/demos/lens/images/thumbs/02.jpg"
            alt=""
          />
          <img
            src="https://html5up.net/uploads/demos/lens/images/thumbs/02.jpg"
            alt=""
          />
          <img
            src="https://html5up.net/uploads/demos/lens/images/thumbs/02.jpg"
            alt=""
          />
          <img
            src="https://html5up.net/uploads/demos/lens/images/thumbs/02.jpg"
            alt=""
          />
          <img
            src="https://html5up.net/uploads/demos/lens/images/thumbs/02.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FileManager;
