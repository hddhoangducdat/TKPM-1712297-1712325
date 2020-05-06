import axios from "../../../api/server";

export const saveFile = () => async (dispatch) => {
  //   try {
  //     const res = await axios.post("/upload", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //       //   onUploadProgress: (progressEvent) => {
  //       //     setUploadPercentage(
  //       //       parseInt(
  //       //         Math.round((progressEvent.loaded * 100) / progressEvent.total)
  //       //       )
  //       //     );
  //       //     // Clear percentage
  //       //     setTimeout(() => setUploadPercentage(0), 10000);
  //       //   },
  //     });
  //     const { fileName, filePath } = res.data;
  //     setUploadedFile({ fileName, filePath });
  //     setMessage("File Uploaded");
  //   } catch (err) {
  //     if (err.response.status === 500) {
  //       setMessage("There was a problem with the server");
  //     } else {
  //       setMessage(err.response.data.msg);
  //     }
  //   }
};
