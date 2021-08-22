import queryString from "querystring";
import axios from "axios";
import rootReducer from "../redux/reducers/rootReducer";
import { createStore } from "redux";
const store = createStore(rootReducer);
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = store.getState().users.token;
    config.headers["Authorization"] = accessToken;
    return config;
  },
  (error) => {
    Promise.reject("Something wrong");
  }
);

// axios.interceptors.request.use(
//   (response) => {
//     if (response && response.data) {
//       return response.data;
//     }
//   },
//   (error) => {
//     // Handle errors
//     throw error;
//   }
// );

export default axiosClient;
