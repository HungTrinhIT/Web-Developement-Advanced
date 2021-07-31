import axiosClient from "./axiosClient";
import axios from "axios";
const userApi = {
  getAll: (params) => {
    const url = "/users";
    return axiosClient.get(url);
  },

  getById: (id) => {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },

  add: (user) => {
    const url = `/users`;
    return axiosClient.post(url, user);
  },

  /**
   *
   * @param {*} course - object course
   * @param {*} id - cousrse id
   * @returns promise
   */
  update: (user, id) => {
    const url = `/users/${id}`;
    return axiosClient.patch(url, user);
  },

  delete: (id) => {
    const url = `/users/delete/${id}`;
    return axiosClient.patch(url);
  },
  updatePassword(credential, id) {
    const url = `/users/change-password`;
    if (credential) {
      credential.id = id;
      return axiosClient.patch(url, credential);
    }
  },

  updateImg: (id, image) => {
    const url = "http://localhost:5000/api/users/image/1";
    console.log(image);

    return axios.patch(url, image, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default userApi;
