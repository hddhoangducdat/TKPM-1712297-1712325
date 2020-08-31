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
import { INVITE_OFF } from "../../store/value";

import { inviteUser } from "../../store/actions";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const InviteFriend = () => {
  const { friend } = useSelector((state) => state);
  const [text, setText] = useState("");
  const { member } = useSelector((state) => state.group.data);

  const dispatch = useDispatch();

  return (
    <div className="middle-blur">
      <div className="middle-blur-sub">
        <div
          className="middle-blur-focus-out"
          onClick={() => {
            dispatch({ type: INVITE_OFF });
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
                if (member.includes(m._id)) return <div key={index}></div>;
                return (
                  <li key={index} className="friend-list-detail">
                    <img src={m.avatar} alt="" />
                    <div className="friend-list-detail__text">{m.userName}</div>

                    <button
                      className="friend-list-button"
                      onClick={() => {
                        dispatch(inviteUser(m._id));
                        dispatch({ type: INVITE_OFF });
                      }}
                    >
                      + Add
                    </button>
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

export default InviteFriend;
