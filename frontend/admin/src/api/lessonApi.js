import axiosClient from "./axiosClient";

const lessonApi = {
  getAll: (params) => {
    const url = "/lessons";
    return axiosClient.get(url);
  },
  getAllForTeacher: (id, params) => {
    const url = `/lessons/teacher/${id}`;
    return axiosClient.get(url);
  },
  getAllForUser: (id, params) => {
    const url = `/lessons/user/${id}`;
    return axiosClient.get(url);
  },
  getByID: (id) => {
    const url = `/lessons/${id}`;
    return axiosClient.get(url);
  },
  add: (lesson) => {
    const url = `/lessons`;
    return axiosClient.post(url, lesson);
  },
  delete: (id) => {
    const url = `/lessons/delete/${id}`;
    return axiosClient.patch(url);
  },
  update: (id, lesson) => {
    const url = `/lessons/${id}`;
    return axiosClient.patch(url, lesson);
  },
};

export default lessonApi;