import axiosClient from "./axiosClient";

const categoryApi = {
  getAll: (params) => {
    const url = "/categories";
    return axiosClient.get(url);
  },

  getById: (id) => {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },

  add: (category) => {
    const url = `/categories`;
    return axiosClient.post(url, category);
  },

  update: (category, id) => {
    const url = `/categories/${id}`;
    return axiosClient.patch(url, category);
  },
};

export default categoryApi;
