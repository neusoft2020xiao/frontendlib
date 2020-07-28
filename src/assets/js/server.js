import axios from "axios";
import { host } from "./url_host";

export const getOrderList = (params) => {
  return axios.get(`${host}/room/list`, {
    params,
  });
};

export const userLogin = (params) => {
  return axios.get(`${host}/user/login`, {
    params,
  });
};
