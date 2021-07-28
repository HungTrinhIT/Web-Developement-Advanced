import axiosClient from "./axiosClient";

const categoryApi = {
  getAll: (params) => {
    const url = "/categories";
    return axiosClient.get(url);
  },

  getAllParents: (params) => {
    const url = "/categories/parents";
    return axiosClient.get(url);
  },

  getAllChildrens: (params) => {
    const url = "/categories/childrens";
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
