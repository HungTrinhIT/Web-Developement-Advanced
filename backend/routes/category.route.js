const express = require("express");
const router = express.Router();
const categoryModel = require("../models/category.model");
const { v4: uuidv4 } = require("uuid");
// Get all categories
router.get("/", async function (req, res) {
  const categories = await categoryModel.all();
  res.json(categories);
});

// Get single categories
router.get("/:id", async function (req, res) {
  const id = req.params.id;
  const category = await categoryModel.singleById(id);
  if (!category) {
    return res.json({
      msg: `Category with id=${id} is not found`,
    });
  }

  res.json(category);
});

//Add new categories
router.post("/", async function (req, res) {
  const { catName, catParent } = req.body;

  if (catName) {
    const isExist = await categoryModel.singleByName(catName);
    if (!isExist) {
      let newCategory = {
        logCreatedDate: new Date(),
        id: uuidv4(),
        catName,
        cat_id: catParent,
      };

      const ids = await categoryModel.add(newCategory);
      return res.status(201).json({
        msg: "Add category successfully",
        newCategory,
      });
    }

    return res.status(200).json({
      msg: "This category is existed",
    });
  }

  res.json({
    msg: "No content for category",
  });
});

//Delete categories
router.patch("/delete/:id", async function (req, res) {
  const catId = req.params.id;

  const cat = await categoryModel.singleById(catId);
  if (cat !== null) {
    const ids = await categoryModel.delete(catId);

    res.json({
      msg: "Delete succesfully",
    });
  }

  res.json({
    msg: "No category for deleting",
  });
});

//Update categories
router.patch("/:id", async function (req, res) {
  const id = req.params.id;
  const updatedCategory = req.body;

  const cat = await categoryModel.singleById(id);

  if (cat) {
    // Kiểm tra name tồn tại hay chưa
    let isExistName = await categoryModel.singleByName(updatedCategory.catName);
    console.log("is:", isExistName);
    if (!isExistName) {
      updatedCategory.logUpdatedDate = new Date();
      await categoryModel.update(id, updatedCategory);
      return res.json({
        msg: "Update category successfully",
        code: 1,
      });
    }

    return res.json({ msg: "Category name is exist!", code: -1 });
  }

  res.json({
    msg: "No category for updating",
    code: -1,
  });
});

module.exports = router;
© 2021 GitHub, Inc.