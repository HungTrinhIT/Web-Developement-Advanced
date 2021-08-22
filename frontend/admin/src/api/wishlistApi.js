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
  singleByBothID: (course_id, user_id) => {
    const url = `/wishlist/${course_id}/${user_id}`;
    return axiosClient.get(url);
  },
  add: (wishlist) => {
    console.log(wishlist);
    const url = `/wishlist`;
    return axiosClient.post(url, wishlist);
  },
  delete: (id) => {
    const url = `/wishlist/delete/${id}`;
    return axiosClient.patch(url);
  },
  
};

export default wishListApi;