import React, { useState } from "react";

// Import React FilePond
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

import { DEADLINE_SUBMIT_SAVE, DEADLINE_SUBMIT_OFF } from "../../store/value";
import { userSubmitDeadline } from "../../store/actions";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
const SubmitDeadLine = ({ userSubmitDeadline }) => {
  const dispatch = useDispatch();
  const [file, setFile] = useState([]);

  return (
    <div className="middle-blur">
      <div className="middle-blur-sub">
        <div
          className="middle-blur-focus-out"
          onClick={() => dispatch({ type: DEADLINE_SUBMIT_OFF })}
        ></div>
        <div className="chat-box-file">
          <FilePond
            className="chat-box-file-input"
            files={file}
            onupdatefiles={setFile}
            allowMultiple={true}
            maxFiles={1}
            // server="/api"
            name="files"
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          ></FilePond>

          <button
            className="button-submit-file"
            onClick={() => {
              userSubmitDeadline(file[0].file);
              dispatch({ type: DEADLINE_SUBMIT_OFF });
            }}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { userSubmitDeadline })(SubmitDeadLine);
