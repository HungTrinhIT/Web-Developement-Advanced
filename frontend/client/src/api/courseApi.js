import axiosClient from "./axiosClient";

const courseApi = {
  getAll: (params) => {
    const url = "/courses";
    return axiosClient.get(url);
  },

  

 
};

export default courseApi;
