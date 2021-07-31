const db = require("../utils/db");
const TB_NAME = "user";

module.exports = {
  all() {
    return db(TB_NAME).where("isDeleted", false);
  },

  async singleById(id) {
    const user = await db(TB_NAME).where("id", id).andWhere("isDeleted", false);
    if (user.length === 0) return null;
    return user[0];
  },

  async singleByName(name) {
    const user = await db(TB_NAME)
      .where("username", name)
      .andWhere("isDeleted", false);
    if (user.length === 0) return null;
    return user[0];
  },
  async singleByEmail(email) {
    const user = await db(TB_NAME)
      .where("email", email)
      .andWhere("isDeleted", false);
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
      isDeleted: true,
      logUpdatedDate: new Date(),
    });
  },

  async update(id, userUpdated) {
    const user = await this.singleById(id);
    if (!user) {
      return null;
    }

    userUpdated.logUpdatedDate = new Date();
    return db(TB_NAME).where("id", id).update(userUpdated);
  },

  updateRefreshToken(id, refreshToken) {
    return db(TB_NAME).where("id", id).update("rfToken", refreshToken);
  },

  async isValidRefreshToken(id, refreshToken) {
    const list = await db(TB_NAME)
      .where("id", id)
      .andWhere("rfToken", refreshToken);
    if (list.length > 0) {
      return true;
    }

    return false;
  },
};
