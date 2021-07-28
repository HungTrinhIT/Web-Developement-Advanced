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
  delete: (id) => {
    const url = `/categories/delete/${id}`;
    return axiosClient.patch(url);
  },
};

export default categoryApi;
