import axiosClient from "./axiosClient";

const purchaseApi = {
  getAll: (params) => {
    const url = "/purchase";
    return axiosClient.get(url);
  },
  getByUserID: (id) => {
    const url = `/purchase/user/${id}`;
    return axiosClient.get(url);
  },
  add: (purchase) => {
    const url = `/purchase`;
    return axiosClient.post(url, purchase);
  },
  delete: (id) => {
    const url = `/purchase/delete/${id}`;
    return axiosClient.patch(url);
  },
};

export default purchaseApi;