import Axios from "axios";

export const request = Axios.create({
  baseURL: "http://14.225.254.184:5432",
});
