import axios from "../../../api/server";
import * as JSZIP from "jszip";
import * as JSZipUtils from "jszip-utils";
import { saveAs } from "file-saver";

export const downloadDeadline = (idx) => async (dispatch, getState) => {
  const _files = getState().deadline[idx].files;
  const zip = new JSZIP();
  let count = 0;
  // let link = document.createElement("a");
  // document.body.appendChild(link);

  _files.map(async (file) => {
    await axios.patch("/deadline/downloadFile", file).then((result) => {
      console.log(result.data);
      // JSZipUtils.getBinaryContent(result.data.webViewLink, function (
      //   err,
      //   data
      // ) {
      //   if (err) {
      //     throw err;
      //   }

      //   console.log(data);
      //   axios
      //     .get(result.data.webViewLink, {
      //       responseType: "blob",
      //     })
      //     .then((response) => {
      //       zip.file(result.data.webViewLink, response.data, {
      //         binary: true,
      //       });
      //       console.log(response.data);
      //     });

      //   // zip.file(result.data.webViewLink, data, { binary: true });

      //   count++;

      //   if (count === _files.length) {
      //     window.setTimeout(function () {
      //       zip
      //         .generateAsync({
      //           type: "blob",
      //         })
      //         .then(function (content) {
      //           console.log(content);
      //           // link.setAttribute(
      //           //   "download",
      //           //   "filesDeadline" + new Date().getTime()
      //           // );
      //           // link.href = URL.createObjectURL(content);
      //           // link.click();

      //           saveAs(content, "fileDeadline-" + new Date().getTime());
      //         });
      //     }, 5000);
      //   }
      // });
    });
  });
  // link.remove();
};
