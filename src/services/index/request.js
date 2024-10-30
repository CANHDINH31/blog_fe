import Axios from "axios";

export const request = Axios.create({
  baseURL: "https://api.ehya.site",
});
