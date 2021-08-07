const db = require("../utils/db");
const TB_NAME = "purchase";

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

  add(purchase) {
    return db(TB_NAME).insert(purchase);
  },

  async delete(id) {
    const purchase = await this.singleById(id);
    if (purchase === null) return null;

    return db(TB_NAME).where("id", id).update({
      isDeleted: true,
      logUpdatedDate: new Date(),
    });
  },

  async update(id, purchaseUpdated) {
    const purchase = await db(TB_NAME)
      .where("id", id);
    if (!purchase) {
      return null;
    }
    purchaseUpdated.logUpdatedDate = new Date();
    return db(TB_NAME).where("id", id).update(purchaseUpdated);
  },

};
