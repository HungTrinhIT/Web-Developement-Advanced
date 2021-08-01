import axiosClient from "./axiosClient";

const wishListApi = {
  getAll: (params) => {
    const url = "/wishlist";
    return axiosClient.get(url);
  },
  getAllByUserID: (id) => {
    const url = `/wishlist/user/${id}`;
    return axiosClient.get(url);
  },
  delete: (id) => {
    const url = `/wishlist/delete/${id}`;
    return axiosClient.patch(url);
  },
};

export default wishListApi;