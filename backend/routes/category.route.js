const express = require("express");
const router = express.Router();
const categoryModel = require("../models/category.model");
// Get all categories
router.get("/", async function (req, res) {
  const categories = await categoryModel.all();
  res.json({
    categories,
  });
});

// Get single categories
router.get("/:id", async function (req, res) {
  const id = req.params.id;
  const category = await categoryModel.singleById(id);
  if (!category) {
    res.json({
      msg: `Category with id=${id} is not found`,
    });
  }

  res.json(category);
});

//Add new categories
router.post("/", async function (req, res) {
  const category = req.body;
  if (category.hasOwnProperty("name")) {
    const isExist = await categoryModel.singleByName(category.name);
    if (isExist === null) {
      category.Log_CreatedDate = new Date();
      const ids = await categoryModel.add(category);
      console.log(ids);
      category.id == ids[0];
      res.status(201).json(category);
    }
    res.status(200).json({
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
  const catId = req.params.id;
  const updatedCategory = req.body;
  const cat = await categoryModel.singleById(catId);

  if (cat !== null) {
    updatedCategory.Log_UpdatedDate = new Date();
    await categoryModel.update(catId, updatedCategory);
    res.json({
      updatedCategory,
      msg: "Update sucessfully",
    });
  }

  res.json({
    msg: "No category for updating",
  });
});

module.exports = router;
