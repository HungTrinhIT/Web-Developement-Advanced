import axiosClient from "./axiosClient";

const rateApi = {
  getAll: (params) => {
    const url = "/rate";
    return axiosClient.get(url);
  },
  getById: (id) => {
    const url = `/rate/${id}`;
    return axiosClient.get(url);
  },
  getAllByCourseID: (id) => {
    const url = `/rate/course/${id}`;
    return axiosClient.get(url);
  },
  add: (rate) => {
    console.log(rate);
    const url = `/rate`;
    return axiosClient.post(url, rate);
  },
  delete: (id) => {
    const url = `/rate/delete/${id}`;
    return axiosClient.patch(url);
  },
  
};

export default rateApi;