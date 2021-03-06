import axiosClient from "./axiosClient";

const courseApi = {
  getAll: (params) => {
    const url = "/courses";
    return axiosClient.get(url, { params });
  },
  getById: (id) => {
    const url = `/courses/${id}`;
    return axiosClient.get(url);
  },
  getHighlightLastWeek: () => {
    const url = `/courses/lastweek`;
    return axiosClient.get(url);
  },
  getNewest: (limit) => {
    const url = `/courses/new/${limit}`;
    return axiosClient.get(url);
  },
  getMostView: (limit) => {
    const url = `/courses/mostview/${limit}`;
    return axiosClient.get(url);
  },
  getMostParticipants: ()=>{
    const url = `/courses/mostparticipants`;
    return axiosClient.get(url);
  },
  updateView: (id) => {
    const url = `/courses/view/${id}`;
    return axiosClient.patch(url);
  },
  update: (course, id) => {
    const url = `/courses/${id}`;
    return axiosClient.patch(url, course);
  },
};

export default courseApi;
