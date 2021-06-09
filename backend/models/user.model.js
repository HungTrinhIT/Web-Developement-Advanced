const db = require("../utils/db");
const TB_NAME = "user";

module.exports = {
  all() {
    return db(TB_NAME).where("isdeleted",false);
  },

  async singleById(id) {
    const user = await db(TB_NAME)
      .where("id", id)
      .andWhere("isdeleted", false);
    if (user.length === 0) return null;
    return user[0];
  },

  async singleByName(name) {
    const user = await db(TB_NAME)
      .where("name", name)
      .andWhere("isdeleted", false);
    if (user.length === 0) return null;
    return user[0];
  },

  add(user) {
    return db(TB_NAME).insert(user);
  },

  async delete(id) {
    const user = await this.singleById(id);
    if (user === null) return null;

    return db(TB_NAME).where("id", id).update({
      isdeleted: true,
      Log_UpdatedDate: new Date(),
    });
  },

  async update(id, userUpdated) {
    const user = await this.singleById(id);
    if (!user) {
      return null;
    }

    userUpdated.Log_UpdatedDate = new Date();
    userUpdated.id = user.id;
    return db(TB_NAME).where("id", id).update(userUpdated);
  },
};
