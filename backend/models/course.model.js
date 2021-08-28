const { default: knex } = require("knex");
const db = require("../utils/db");
const TB_NAME = "course";
const categoryModel = require("./category.model");
module.exports = {
  async all(query) {
    let queryData = [];
    const { search, price } = query;
    const cat_ids = "categories" in query ? query.categories.split(".") : null;

    // Search by categories
    if (cat_ids) {
      for (const catID of cat_ids) {
        const category = await categoryModel.singleById(catID);
        if (!category) return [];
        if (category && !category.cat_id) {
          // Get all subcategories
          const subCategories = await categoryModel.allChildrenByParent(
            category.id
          );
          let data = [];

          for (let subCatItem of subCategories) {
            data = await db(TB_NAME).where("category_id", subCatItem.id);
            queryData = [...queryData, ...data];
          }
        } else {
          const data = await db(TB_NAME).where("category_id", catID);
          queryData = [...queryData, ...data];
        }
      }
    } else {
      if ("search" in query && "price" in query) {
        queryData = await db(TB_NAME)
          .whereRaw(`MATCH(courseName) AGAINST('${search}')`)
          .andWhere("isDeleted", false)
          .orderBy("price", `${price}`);
      } else if ("search" in query) {
        queryData = await db(TB_NAME)
          .whereRaw(`MATCH(courseName) AGAINST('${search}')`)
          .andWhere("isDeleted", false);
      } else if ("order" in query) {
        queryData = await db(TB_NAME)
          .andWhere("isDeleted", false)
          .orderBy("price", `${price}`);
      } else {
        queryData = await db(TB_NAME).where("isDeleted", false);
      }
    }

    return queryData;
  },



  async singleById(id) {
    const course = await db(TB_NAME)
      .where("id", id)
      .andWhere("isDeleted", false);
    if (course.length === 0) return null;
    return course[0];
  },

  allLastWeek() {
    console.log("last week model");
    return db(TB_NAME).whereRaw('logCreatedDate > now() - interval 7 day').orderBy("view", "desc").limit(3);
  },

  allFullTextSearch(search) {
    return db(TB_NAME).whereRaw(`MATCH(courseName) AGAINST('${search}')`);
  },

  newestCourse(limit) {
    return db(TB_NAME).orderBy("logCreatedDate", "desc").limit(limit);
  },

  mostViewCourse(limit) {
    return db(TB_NAME).orderBy("view", "desc").limit(limit);
  },

  mostParticipants(){
    return db(TB_NAME).select("category_id").sum({participants:"currentStudent"}).count({quantity:"id"}).whereRaw('logCreatedDate > now() - interval 7 day').groupBy("category_id").limit(5);
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

  async updateView(id) {
    const course = await this.singleById(id);
    if (!course) {
      return null;
    }
    const view = course.view;

    return db(TB_NAME)
      .where("id", id)
      .update("view", view + 1);
  },
  async getCountOfCourseByCategory(categoryId) {
    const countOfCat = await db(TB_NAME)
      .where("category_id", categoryId)
      .andWhere("isDeleted", false);
    if (!countOfCat) {
      return null;
    }

    return countOfCat;
  },
};
