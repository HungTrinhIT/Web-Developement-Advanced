const db = require("../utils/db");
const TB_NAME = "course";

module.exports = {
  all() {
    return db(TB_NAME).where("isDeleted", false);
  },

  async singleById(id) {
    const course = await db(TB_NAME)
      .where("id", id)
      .andWhere("isDeleted", false);
    if (course.length === 0) return null;
    return course[0];
  },

  async singleByName(name) {
    const course = await db(TB_NAME)
      .where("courseName", name)
      .andWhere("isDeleted", false);
    if (course.length === 0) return null;
    return course[0];
  },

  add(course) {
    return db(TB_NAME).insert(course);
  },

  async delete(id) {
    const course = await this.singleById(id);
    if (course === null) return null;

    return db(TB_NAME).where("id", id).update({
      isDeleted: true,
      logUpdatedDate: new Date(),
    });
  },

  async update(id, courseUpdated) {
    const course = await this.singleById(id);
    if (!course) {
      return null;
    }

    courseUpdated.logUpdatedDate = new Date();
    return db(TB_NAME).where("id", id).update(courseUpdated);
  },
};
