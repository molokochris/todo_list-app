import axios from "axios";

export const myAxios = () => {
  return axios.create({
    baseURL: "http://localhost:3000",
  });
};
