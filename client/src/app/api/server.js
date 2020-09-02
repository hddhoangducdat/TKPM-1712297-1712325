import axios from "axios";
const url = "/";

export default axios.create({
  baseURL: url,
});
