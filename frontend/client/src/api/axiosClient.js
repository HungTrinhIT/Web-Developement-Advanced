import queryString from "querystring";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
    
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

// Handle token
axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axios.interceptors.request.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
