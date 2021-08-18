const db = require("../utils/db");
const TB_NAME = "category";
module.exports = {
  all() {
    return db(TB_NAME).where("isDeleted", false);
  },
  allChildrenByParent(id) {
    return db(TB_NAME).where({
      isDeleted: false,
      cat_id: id,
    });
  },
  allParents() {
    return db(TB_NAME).where({
      isDeleted: false,
      cat_id: null,
    });
  },

  allChildrens() {
    return db(TB_NAME).where("isDeleted", false).andWhereNot("cat_id", null);
  },

  async singleById(id) {
    const cat = await db(TB_NAME).where("id", id).andWhere("isDeleted", false);
    if (cat.length === 0) return null;
    return cat[0];
  },

  async singleByName(name) {
    const cat = await db(TB_NAME)
      .where("catName", name)
      .andWhere("isDeleted", false);
    if (cat.length === 0) return null;
    return cat[0];
  },

  add(category) {
    return db(TB_NAME).insert(category);
  },

  async delete(id) {
    const cat = await this.singleById(id);
    if (cat === null) return null;

    return db(TB_NAME).where("id", id).update({
      isDeleted: true,
      logUpdatedDate: new Date(),
    });
  },

  async update(id, categoryUpdated) {
    const cat = await this.singleById(id);
    if (!cat) {
      return null;
    }
    return db(TB_NAME).where("id", id).update(categoryUpdated);
  },
};
