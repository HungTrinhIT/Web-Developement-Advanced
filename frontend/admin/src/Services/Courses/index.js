import axios from "axios";

class CourseService {
  baseURL = "localhost:5000/courses";

  fetchAllCourses() {
    return axios.get(this.baseURL); // => Return Promise
  }

  fetchSingleCourse(id) {
    return axios.get(this.baseURL + `/${id}`);
  }
}

export default CourseService;
