import axiosClient from "./axiosClient";
import axios from "axios";
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

  updateImg: (id, image) => {
    const url = "http://localhost:5000/api/courses/image/1";
    console.log(image);

    return axios.patch(url, image, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default courseApi;
