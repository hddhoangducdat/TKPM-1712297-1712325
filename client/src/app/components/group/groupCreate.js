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
import { GROUP_OFF, GROUP_SAVE } from "../../store/value";
import { ReactComponent as PlusIcon } from "../../asset/img/icon/plus.svg";
import { ReactComponent as TickIcon } from "../../asset/img/icon/tick1.svg";
import { ReactComponent as CancleIcon } from "../../asset/img/icon/close.svg";

import { getFriends } from "../../store/actions";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const GroupCreate = ({ getFriends }) => {
  const [file, setFile] = useState([]);
  const [text, setText] = useState("");
  const [member, setMember] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setMember(getFriends());
  }, [1]);

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
            <div className="post-input-header__text">CREATE GROUP</div>
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
            <li className="friend-list-detail">
              <img
                src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/54463133_104992784011639_7082721617398202368_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=mrVqREjJfGUAX8PBmZf&_nc_ht=scontent.fsgn5-3.fna&oh=1f58869b76473ffee3cbaf05a4b381d7&oe=5F688D33"
                alt=""
              />
              <div className="friend-list-detail__text">Hoàng Đức Đạt</div>
              <div className="friend-list-detail__svg">
                <a href="#" className="friend-list-detail__svg__tick">
                  <TickIcon />
                </a>
                <a href="#" className="friend-list-detail__svg__close">
                  <CancleIcon />
                </a>
              </div>
            </li>
            <li className="friend-list-detail">
              <img
                src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/54463133_104992784011639_7082721617398202368_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=mrVqREjJfGUAX8PBmZf&_nc_ht=scontent.fsgn5-3.fna&oh=1f58869b76473ffee3cbaf05a4b381d7&oe=5F688D33"
                alt=""
              />
              <div className="friend-list-detail__text">Hoàng Đức Đạt</div>
              <a href="#">
                <PlusIcon />
              </a>
            </li>
            <li className="friend-list-detail">
              <img
                src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/54463133_104992784011639_7082721617398202368_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=mrVqREjJfGUAX8PBmZf&_nc_ht=scontent.fsgn5-3.fna&oh=1f58869b76473ffee3cbaf05a4b381d7&oe=5F688D33"
                alt=""
              />
              <div className="friend-list-detail__text">Hoàng Đức Đạt</div>
              <a href="#">
                <PlusIcon />
              </a>
            </li>
            <li className="friend-list-detail">
              <img
                src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/54463133_104992784011639_7082721617398202368_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=mrVqREjJfGUAX8PBmZf&_nc_ht=scontent.fsgn5-3.fna&oh=1f58869b76473ffee3cbaf05a4b381d7&oe=5F688D33"
                alt=""
              />
              <div className="friend-list-detail__text">Hoàng Đức Đạt</div>
              <a href="#">
                <PlusIcon />
              </a>
            </li>
            <li className="friend-list-detail">
              <img
                src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/54463133_104992784011639_7082721617398202368_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=mrVqREjJfGUAX8PBmZf&_nc_ht=scontent.fsgn5-3.fna&oh=1f58869b76473ffee3cbaf05a4b381d7&oe=5F688D33"
                alt=""
              />
              <div className="friend-list-detail__text">Hoàng Đức Đạt</div>
              <a href="#">
                <PlusIcon />
              </a>
            </li>
            <li className="friend-list-detail">
              <img
                src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/54463133_104992784011639_7082721617398202368_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=mrVqREjJfGUAX8PBmZf&_nc_ht=scontent.fsgn5-3.fna&oh=1f58869b76473ffee3cbaf05a4b381d7&oe=5F688D33"
                alt=""
              />
              <div className="friend-list-detail__text">Hoàng Đức Đạt</div>
              <a href="#">
                <PlusIcon />
              </a>
            </li>
            <li className="friend-list-detail">
              <img
                src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/54463133_104992784011639_7082721617398202368_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=mrVqREjJfGUAX8PBmZf&_nc_ht=scontent.fsgn5-3.fna&oh=1f58869b76473ffee3cbaf05a4b381d7&oe=5F688D33"
                alt=""
              />
              <div className="friend-list-detail__text">Hoàng Đức Đạt</div>
              <a href="#">
                <PlusIcon />
              </a>
            </li>
            <li className="friend-list-detail">
              <img
                src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/54463133_104992784011639_7082721617398202368_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=mrVqREjJfGUAX8PBmZf&_nc_ht=scontent.fsgn5-3.fna&oh=1f58869b76473ffee3cbaf05a4b381d7&oe=5F688D33"
                alt=""
              />
              <div className="friend-list-detail__text">Hoàng Đức Đạt</div>
              <div className="friend-list-detail__svg">
                <a href="#">
                  <PlusIcon />
                </a>
                <a href="#">
                  <PlusIcon />
                </a>
              </div>
            </li>
            <li className="friend-list-detail">
              <img
                src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/54463133_104992784011639_7082721617398202368_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=mrVqREjJfGUAX8PBmZf&_nc_ht=scontent.fsgn5-3.fna&oh=1f58869b76473ffee3cbaf05a4b381d7&oe=5F688D33"
                alt=""
              />
              <div className="friend-list-detail__text">Hoàng Đức Đạt</div>
              <a href="#">
                <PlusIcon />
              </a>
            </li>
            <li className="friend-list-detail">
              <img
                src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/54463133_104992784011639_7082721617398202368_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=mrVqREjJfGUAX8PBmZf&_nc_ht=scontent.fsgn5-3.fna&oh=1f58869b76473ffee3cbaf05a4b381d7&oe=5F688D33"
                alt=""
              />
              <div className="friend-list-detail__text">Hoàng Đức Đạt</div>
              <a href="#">
                <PlusIcon />
              </a>
            </li>
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

export default connect(null, { getFriends })(GroupCreate);
