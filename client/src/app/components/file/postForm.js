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
import { POST_SAVE, POST_OFF, GROUP_OFF, GROUP_SAVE } from "../../store/value";
import { postStatus, postStatusGroup } from "../../store/actions";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const PostForm = ({ postStatus, postStatusGroup }) => {
  const [file, setFile] = useState([]);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { group } = useSelector((state) => state);

  return (
    <div className="middle-blur">
      <div className="middle-blur-sub">
        <div
          className="middle-blur-focus-out"
          onClick={() => {
            dispatch({ type: POST_OFF });
          }}
        ></div>
        <div className="post-input">
          <div className="post-input-header">
            <div className="post-input-header__text">Create Status</div>
          </div>
          <textarea
            rows={10}
            className="post-input-text"
            type="text"
            value={text}
            placeholder="Tell your friends what are you up to"
            onChange={(e) => {
              setText(e.target.value);
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
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          ></FilePond>

          <a
            href="#"
            className="button post-input-button"
            onClick={() => {
              if (!group) {
                postStatus(text, file);
              } else postStatusGroup(group, text, file);
              dispatch({ type: POST_SAVE });
            }}
          >
            <div>Upload</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { postStatusGroup, postStatus })(PostForm);
