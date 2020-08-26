/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
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
import { DEADLINE_OFF, DEADLINE_SAVE } from "../../store/value";
import { saveDeadline } from "../../store/actions";

const DeadLinePost = ({ saveDeadline }) => {
  const [name, setName] = useState("");
  const [file, setFile] = useState([]);
  const [des, setDes] = useState("");
  const [deadline, setDeadline] = useState(() => {
    var today = new Date();
    return (
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    );
  });
  const dispatch = useDispatch();

  return (
    <div className="middle-blur">
      <div className="middle-blur-sub">
        <div
          className="middle-blur-focus-out"
          onClick={() => {
            dispatch({ type: DEADLINE_OFF });
          }}
        ></div>
        <div className="post-input">
          <div className="post-input-header">
            <div className="post-input-header__text">
              <input
                className="post-group-input-name"
                type="text"
                value={name}
                placeholder="Title for this deadline"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>

          <textarea
            rows={4}
            className="post-input-text"
            type="text"
            value={des}
            placeholder="Description"
            onChange={(e) => {
              console.log(e.target.value);
              setDes(e.target.value);
            }}
          />

          <input
            type="date"
            value={deadline}
            onChange={(e) => {
              console.log(e.target.value);
              setDeadline(e.target.value);
            }}
          />

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
              saveDeadline(name, des, deadline, file);
              dispatch({ type: DEADLINE_SAVE });
            }}
          >
            <div>Create</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { saveDeadline })(DeadLinePost);
