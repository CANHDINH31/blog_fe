import Axios from "axios";

export const request = Axios.create({
  baseURL: process.env.BASE_URL,
});
