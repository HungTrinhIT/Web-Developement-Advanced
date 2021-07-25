import axiosClient from "./axiosClient";

const courseApi = {
  getAll: (params) => {
    const url = "/courses";
    return axiosClient.get(url);
  },
  getById: (id) => {
    const url = `/courses/${id}`;
    return axiosClient.get(url);
  },
};

export default courseApi;
