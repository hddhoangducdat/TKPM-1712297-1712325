import axios from "../../../api/server";

export const getDeadLineAll = (ids, setDeadline) => async (
  dispatch,
  getState
) => {
  await Promise.all(
    ids.map(async (id) => {
      {
        const response = await axios.get(`/deadline/group/${id}`);
        return response.data;
      }
    })
  ).then((arr) => {
    let result = [];
    arr.map((a) => {
      a.map((t) => {
        result.push(t);
      });
    });

    setDeadline(result);

    // setDeadline(arr);
  });
};
