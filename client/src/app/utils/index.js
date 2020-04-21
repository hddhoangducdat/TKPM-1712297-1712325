import axios from "../api/server";

export default (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios.defaults.headers["Authorization"] = `Bearer ${token}`;
    console.log(axios.defaults.headers.common["Authorization"]);
  } else {
    delete axios.defaults.headers.common["Authorization"];
    delete axios.defaults.headers["Authorization"];
  }
};
