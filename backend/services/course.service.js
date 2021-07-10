const courseModel = require("../models/course.model");
const { all } = require("../routes/course.route");

const CourseService = {
  async all() {
    const listOfCourse = await courseModel.all();
    console.log(listOfCourse);
  },
};

module.exports = CourseService;
