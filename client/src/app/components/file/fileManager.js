/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { ReactComponent as CloseIcon } from "../../asset/img/icon/close.svg";
import { FILE_MANAGER_OFF } from "../../store/value";
import { useDispatch, useSelector } from "react-redux";

const FileManager = () => {
  const dispatch = useDispatch();
  const { user, id, file } = useSelector((state) => state.auth);
  const [image, setImage] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"
  );

  useEffect(() => {
    if (file.length === 0) {
      setImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"
      );
    } else {
      setImage(file[0].fileUrl);
    }
  }, [file.length]);

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
        <img src={image} alt="" />
      </div>
      <div className="grid-item-info picture-manager">
        <div className="picture-manager-header">
          <h1>Hoang Duc Dat</h1>
          <p>File manager with UI</p>
        </div>
        <div className="picture-manager-list">
          {file.map((f) => {
            let arr = f.fileName.split(".");
            if (
              arr[arr.length - 1] === "jpg" ||
              arr[arr.length - 1] === "jpeg" ||
              arr[arr.length - 1] === "png"
            ) {
              return (
                <img
                  key={f._id}
                  className={
                    f.fileUrl === image
                      ? "selected-image"
                      : "none-selected-image"
                  }
                  src={f.fileUrl}
                  alt=""
                  onClick={() => setImage(f.fileUrl)}
                />
              );
            } else {
              return (
                <a
                  key={f._id}
                  className="picture-manager-list-file"
                  href={f.fileUrl}
                >
                  {f.fileName}
                </a>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default FileManager;
