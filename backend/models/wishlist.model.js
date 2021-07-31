const db = require("../utils/db");
const TB_NAME = "wishlist";

module.exports = {
  all() {
    return db(TB_NAME).where("isDeleted", false);
  },

  allByUserId(user_id){
    return db(TB_NAME).where({
        "isDeleted" : false,
        "user_id" : user_id
    })
  },

  async singleByBothId(course_id, user_id) {
    const wish = await db(TB_NAME)
      .where({
        "course_id": course_id,
        "user_id": user_id,
        "isDeleted": false
      })
    if (wish.length === 0) return null;
    return wish[0];
  },

  async singleById(id) {
    const wish = await db(TB_NAME)
      .where("id", id)
      .andWhere("isDeleted", false);
    if (wish.length === 0) return null;
    return wish[0];
  },

  add(wishlist) {
    return db(TB_NAME).insert(wishlist);
  },

  async delete(id) {
    const wish = await this.singleById(id);
    if (wish === null) return null;

    return db(TB_NAME).where("id", id).update({
      isDeleted: true,
      logUpdatedDate: new Date(),
    });
  },

  async update(id, wishUpdated) {
    const wish = await this.singleById(id);
    if (!wish) {
      return null;
    }

    wishUpdated.logUpdatedDate = new Date();
    return db(TB_NAME).where("id", id).update(wishUpdated);
  },

};
