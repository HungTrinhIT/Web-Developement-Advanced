const db = require("../utils/db");
const TB_NAME = "lesson";

module.exports = {
  all() {
    return db(TB_NAME).where({
      "isDeleted" : false,
    });
  },

  allForTeacher(course_id) {
    return db(TB_NAME).where({
      "course_id" : course_id,
      "isDeleted" : false,
    }).orderBy("logCreatedDate", "asc");
  },

  allForUser(course_id) {
    return db(TB_NAME).where({
      "course_id" : course_id,
      "isDeleted" : false,
      "isDone" : true
    }).orderBy("logCreatedDate", "asc");
  },

  async singleById(id) {
    const lesson = await db(TB_NAME)
      .where("id", id)
      .andWhere("isDeleted", false);
    if (lesson.length === 0) return null;
    return lesson[0];
  },

  add(lessonlist) {
    return db(TB_NAME).insert(lessonlist);
  },

  async delete(id) {
    const lesson = await this.singleById(id);
    if (lesson === null) return null;

    return db(TB_NAME).where("id", id).update({
      isDeleted: true,
      logUpdatedDate: new Date(),
    });
  },

  async update(id, lessonUpdated) {
    const lesson = await this.singleById(id);
    if (!lesson) {
      return null;
    }

    lessonUpdated.logUpdatedDate = new Date();
    return db(TB_NAME).where("id", id).update(lessonUpdated);
  },

};
