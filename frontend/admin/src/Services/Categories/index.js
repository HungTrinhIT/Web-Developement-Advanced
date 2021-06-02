import axios from "axios";

class CategoryService {
  baseUrl = "http://localhost:5000/categories";

  fetchAllCategories() {
    return axios.get(this.baseUrl);
  }

  fetchSingleCategory(id) {
    return axios.get(this.baseUrl + `/${id}`);
  }
}

export default CategoryService;
