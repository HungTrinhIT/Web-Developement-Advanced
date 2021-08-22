import axiosClient from "./axiosClient";

const authApi = {
  auth: (user) => {
    const url = `/auth`;
    return axiosClient.post(url, user);
  },
};

export default authApi;
