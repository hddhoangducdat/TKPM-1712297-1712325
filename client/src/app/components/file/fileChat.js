import React, { useState } from "react";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const FileChat = ({ file, setFile }) => {
  const [pond, setPond] = useState("");

  return (
    <FilePond
      ref={(ref) => setPond(ref)}
      files={file}
      allowMultiple={true}
      maxFiles={3}
      // oninit={() => console.log(pond)}
      onupdatefiles={(fileItems) => {
        // Set currently active file objects to this.state
        setFile(fileItems.map((fileItem) => fileItem.file));
      }}
    />
  );
};

export default FileChat;
