const categoryModel = require("../models/category.model");
const { all } = require("../routes/course.route");

const CategoryService = {
  async all() {
    const listOfCategory = await categoryModel.all();
    console.log(listOfCategory);
  },
};

module.exports = CategoryService;
