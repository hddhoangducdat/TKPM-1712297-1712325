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
import {
  GROUP_OFF,
  GROUP_SAVE,
  REMOVE_FRIEND_FROM_GROUP,
  ADD_FRIEND_TO_GROUP,
} from "../../store/value";
import { ReactComponent as PlusIcon } from "../../asset/img/icon/plus.svg";
import { ReactComponent as TickIcon } from "../../asset/img/icon/tick1.svg";
import { ReactComponent as CancleIcon } from "../../asset/img/icon/close.svg";

import { getFriends, createGroup } from "../../store/actions";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const GroupCreate = ({ getFriends, createGroup }) => {
  const [file, setFile] = useState([]);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const { friend } = useSelector((state) => state);
  const [arr, setArr] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getFriends();
  }, [1]);

  useEffect(() => {
    setArr(
      friend.map((f) => {
        return false;
      })
    );
  }, [friend.length]);

  console.log(arr);

  return (
    <div className="middle-blur">
      <div className="middle-blur-sub">
        <div
          className="middle-blur-focus-out"
          onClick={() => {
            dispatch({ type: GROUP_OFF });
          }}
        ></div>
        <div className="post-input">
          <div className="post-input-header">
            <div className="post-input-header__text">
              <input
                className="post-group-input-name"
                type="text"
                value={name}
                placeholder="Your group's name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>

          <input
            className="post-group-input"
            type="text"
            value={text}
            placeholder="Search for friends to join you"
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
                    {arr[index] ? (
                      <div className="friend-list-detail__svg">
                        <a href="#" className="friend-list-detail__svg__tick">
                          <TickIcon />
                        </a>
                        <a
                          href="#"
                          className="friend-list-detail__svg__close"
                          onClick={() => {
                            dispatch({
                              type: REMOVE_FRIEND_FROM_GROUP,
                              payload: index,
                            });
                            const tmp = arr.map((f, i) => {
                              if (i === index) {
                                return false;
                              } else return f;
                            });
                            setArr(tmp);
                          }}
                        >
                          <CancleIcon />
                        </a>
                      </div>
                    ) : (
                      <div className="friend-list-detail__svg">
                        <a
                          href="#"
                          className="friend-list-detail__svg__plus"
                          onClick={() => {
                            dispatch({
                              type: ADD_FRIEND_TO_GROUP,
                              payload: index,
                            });
                            const tmp = arr.map((f, i) => {
                              if (i === index) {
                                return true;
                              } else return f;
                            });
                            setArr(tmp);
                          }}
                        >
                          <PlusIcon />
                        </a>
                      </div>
                    )}
                  </li>
                );
              })
            ) : (
              <div></div>
            )}
          </ul>
          <FilePond
            className="post-input-file"
            files={file}
            onupdatefiles={setFile}
            allowMultiple={true}
            maxFiles={1}
            // server="/api"
            name="files"
            labelIdle="Choose a Avatar for your group"
          ></FilePond>

          <a
            href="#"
            className="button post-input-button"
            onClick={() => {
              const result = friend.filter((f, i) => {
                return arr[i];
              });
              createGroup(result, file[0].file, name);
              dispatch({ type: GROUP_SAVE });
            }}
          >
            <div>Create</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { getFriends, createGroup })(GroupCreate);
