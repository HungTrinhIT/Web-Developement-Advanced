const db = require("../utils/db");
const TB_NAME = "course";

module.exports = {
  all() {
    return db(TB_NAME).where("isdeleted",false);
  },

  async singleById(id) {
    const course = await db(TB_NAME)
      .where("id", id)
      .andWhere("isdeleted", false);
    if (course.length === 0) return null;
    return course[0];
  },

  async singleByName(name) {
    const course = await db(TB_NAME)
      .where("name", name)
      .andWhere("isdeleted", false);
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
      isdeleted: true,
      Log_UpdatedDate: new Date(),
    });
  },

  async update(id, courseUpdated) {
    const course = await this.singleById(id);
    if (!course) {
      return null;
    }

    courseUpdated.Log_UpdatedDate = new Date();
    courseUpdated.id = course.id;
    return db(TB_NAME).where("id", id).update(courseUpdated);
  },
};
