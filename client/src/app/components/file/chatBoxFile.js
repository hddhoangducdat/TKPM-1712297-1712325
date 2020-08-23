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

import { CHAT_BOX_FILE_SAVE, CHAT_BOX_FILE_OFF } from "../../store/value";
import { uploadFileChatBox } from "../../store/actions";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
const ChatBoxFile = ({ uploadFileChatBox }) => {
  const { chatBox } = useSelector((state) => state.utils.file);
  // const {id} = useSelector((state) => state.message.)
  const dispatch = useDispatch();

  return (
    <div className="middle-blur">
      <div className="middle-blur-sub">
        <div
          className="middle-blur-focus-out"
          onClick={() => dispatch({ type: CHAT_BOX_FILE_OFF })}
        ></div>
        <div className="chat-box-file">
          <FilePond
            className="chat-box-file-input"
            files={chatBox.files}
            onupdatefiles={(listFile) => {
              dispatch({
                type: CHAT_BOX_FILE_SAVE,
                payload: listFile.map((f) => f.file),
              });
            }}
            allowMultiple={true}
            maxFiles={6}
            // server="/api"
            name="files"
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          ></FilePond>

          <button
            className="button-submit-file"
            onClick={() => {
              uploadFileChatBox(chatBox.files);
              dispatch({ type: CHAT_BOX_FILE_OFF });
            }}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { uploadFileChatBox })(ChatBoxFile);
