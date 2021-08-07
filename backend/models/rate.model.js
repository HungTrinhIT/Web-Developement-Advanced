const db = require("../utils/db");
const TB_NAME = "rate";

module.exports = {
  all() {
    return db(TB_NAME).where({
      "isDeleted" : false,
    });
  },

  allByCourse(course_id) {
    return db(TB_NAME).where({
      "isDeleted" : false,
      "course_id" : course_id
    });
  },

  async singleById(id) {
    const rate = await db(TB_NAME)
      .where("id", id)
      .andWhere("isDeleted", false);
    if (rate.length === 0) return null;
    return rate[0];
  },

  async singleByBothId(course_id, user_id) {
    const rate = await db(TB_NAME)
      .where({
        "course_id": course_id,
        "user_id": user_id,
        "isDeleted" : false,
      })
    if (rate.length === 0) return null;
    return rate[0];
  },

  add(rate) {
    return db(TB_NAME).insert(rate);
  },

  async delete(id) {
    const rate = await this.singleById(id);
    if (rate === null) return null;

    return db(TB_NAME).where("id", id).update({
      isDeleted: true,
      logUpdatedDate: new Date(),
    });
  },

  async update(id, rateUpdated) {
    const rate = await this.singleById(id);
    if (!rate) {
      return null;
    }

    rateUpdated.logUpdatedDate = new Date();
    return db(TB_NAME).where("id", id).update(rateUpdated);
  },

};
