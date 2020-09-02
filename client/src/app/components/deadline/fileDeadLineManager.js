import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DEADLINE_FILE_OFF } from "../../store/value";
import { saveDeadline } from "../../store/actions";

const FileDeadlineManager = ({ index }) => {
  const { files } = useSelector((state) => state.deadline[index]);
  const { friend } = useSelector((state) => state);
  const noti = "List all file member has sumitted";
  const [text, setText] = useState("");
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  console.log(friend);

  return (
    <div className="middle-blur">
      <div className="middle-blur-sub">
        <div
          className="middle-blur-focus-out"
          onClick={() => {
            dispatch({ type: DEADLINE_FILE_OFF });
          }}
        ></div>
        <div className="post-input post-file-manager">
          <div className="post-input-header">
            <div className="post-input-header__text">{noti}</div>
          </div>

          <input
            className="post-group-input"
            type="text"
            value={text}
            placeholder="Search for filenames to download"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />

          <ul className="friend-list">
            {files instanceof Array ? (
              files.map((e, idx) => {
                return (
                  <li key={idx} className="friend-list-detail">
                    <img
                      src={
                        friend.filter((user) => user._id === e.from)[0].avatar
                      }
                      alt="avatar-user"
                    />
                    <div className="friend-list-detail__text-wrap">
                      <div className="friend-list-detail__text wrap">
                        {
                          friend.filter((user) => user._id === e.from)[0]
                            .userName
                        }
                      </div>
                      <div className="friend-list-detail__text wrap">
                        {e.fileName}
                      </div>
                    </div>

                    <button
                      className="friend-list-button"
                      onClick={() => {
                        const link = document.createElement("a");
                        link.setAttribute("download", e.fileName);
                        link.href = e.fileUrl;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      Download
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

export default FileDeadlineManager;
