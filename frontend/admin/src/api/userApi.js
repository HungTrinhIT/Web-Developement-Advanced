import axiosClient from "./axiosClient";
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
    const url = `/users/change-password/${id}`;
    return axiosClient.patch(url, credential);
  },

  uploadAvatar: (id, image) => {
    const url = `/users/upload-avatar/${id}`;
    return axiosClient.patch(url, image);
  },

  lockUser: (id) => {
    const url = `/users/lock/${id}`;
    return axiosClient.patch(url);
  },

  unLockUser: (id) => {
    const url = `/users/unlock/${id}`;
    return axiosClient.patch(url);
  },
};

export default userApi;
