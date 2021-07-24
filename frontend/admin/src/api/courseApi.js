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

  add: (course) => {
    const url = `/courses`;
    return axiosClient.post(url, course);
  },

  update: (course, id) => {
    const url = `/courses/${id}`;
    return axiosClient.patch(url, course);
  },

  delete: (id) => {
    const url = `/courses/delete/${id}`;
    return axiosClient.patch(url);
  },
};

export default courseApi;
