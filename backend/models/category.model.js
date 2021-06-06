const db = require("../utils/db");
const TB_NAME = "category";
module.exports = {
  all() {
    return db(TB_NAME).where("isdeleted",false);
  },

  async singleById(id) {
    const cat = await db(TB_NAME).where("id", id).andWhere("isdeleted", false);
    if (cat.length === 0) return null;
    return cat[0];
  },
  
  

  async singleByName(name) {
    const cat = await db(TB_NAME)
      .where("name", name)
      .andWhere("isdeleted", false);
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
      isdeleted: true,
      Log_UpdatedDate: new Date(),
    });
  },

  async update(id, categoryUpdated) {
    const cat = await this.singleById(id);
    if (!cat) {
      return null;
    }

    categoryUpdated.Log_UpdatedDate = new Date();
    categoryUpdated.id = cat.id;
    return db(TB_NAME).where("id", id).update(categoryUpdated);
  },
};


// Flow
// API Course => API User => Frontend Category + Course (admin )=> Login (API User + Fe admin User)
// Front end client
/*
  - Homepage:
    + 10 khoa hoc yeu thich nhat
    + 10 khoa hoc rating cao nhat
    + ....
    + .....
  -  Ở mỗi cái course nút Xem chi tiết => Sang trang Khóa học chi tiết 
  -  Danh sách khóa học: Search, Filter , Sort , Phân trang 
  -  Enroll khóa học sau khi user đã đăng nhập:
    + Có thể học
    + API lesson
  
  -------------------------------------------------------------------------
  - Chatbot
  - 
*/