import Axios from "axios";

export const request = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
