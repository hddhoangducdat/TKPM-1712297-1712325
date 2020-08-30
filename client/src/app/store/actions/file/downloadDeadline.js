import axios from "../../../api/server";

export const downloadDeadline = (id) => async (dispatch, getState) => {
  axios.get(`/deadline/getAllFile/${id}`).then((response) => {
    console.log(response.data);
    response.data.map(async (file) => {
      await axios.patch("/deadline/downloadFile", file).then((result) => {
        console.log(result.data);
      });
    });
  });
};
