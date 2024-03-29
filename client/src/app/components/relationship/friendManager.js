/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { FilePond, File, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useSelector, useDispatch, connect } from "react-redux";
import { FRIEND_MANAGER_OFF } from "../../store/value";
import { ReactComponent as PlusIcon } from "../../asset/img/icon/plus.svg";
import { ReactComponent as TickIcon } from "../../asset/img/icon/tick1.svg";
import { ReactComponent as CancleIcon } from "../../asset/img/icon/close.svg";

import { getFriends, createGroup } from "../../store/actions";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const GroupCreate = ({ getFriends, createGroup }) => {
  const { friend } = useSelector((state) => state);
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="middle-blur">
      <div className="middle-blur-sub">
        <div
          className="middle-blur-focus-out"
          onClick={() => {
            dispatch({ type: FRIEND_MANAGER_OFF });
          }}
        ></div>
        <div className="post-input">
          <input
            className="post-group-input"
            type="text"
            value={text}
            placeholder="Search for friends"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <ul className="friend-list">
            {friend instanceof Array ? (
              friend.map((m, index) => {
                return (
                  <li key={index} className="friend-list-detail">
                    <img src={m.avatar} alt="" />
                    <div className="friend-list-detail__text">{m.userName}</div>

                    <div className="friend-list-detail__svg">
                      <a href="#" className="friend-list-detail__svg__close">
                        <CancleIcon />
                      </a>
                    </div>
                  </li>
                );
              })
            ) : (
              <div></div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { getFriends, createGroup })(GroupCreate);
