const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { cloudinary } = require("../utils/cloudinary");

const courseModel = require("../models/course.model");
const categoryModel = require("../models/category.model");

// Get all
router.get("/", async function (req, res) {
  const courses = await courseModel.all();
  const coursesIncludeCategoryName = [];
  for (let course of courses) {
    let category = await categoryModel.singleById(course.category_id);
    if (category) {
      course.categoryName = category.catName;
      coursesIncludeCategoryName.push(course);
    }
  }

  res.json(coursesIncludeCategoryName);
});

// Get single by ID
router.get("/:id", async function (req, res) {
  const id = req.params.id;
  let course = await courseModel.singleById(id);

  if (course === null) {
    return res.json({
      msg: `Course is not found`,
    });
  }

  res.json(course);
});

// Add new course
router.post("/", async function (req, res) {
  let course = req.body;
  const courseId = uuidv4();
  console.log("course", course);
  course = {
    ...course,
    id: courseId,
    logCreatedDate: new Date(),
    logUpdatedDate: new Date(),
  };
  const ids = await courseModel.add(course);

  res.status(201).json(course);
});

// Delete course
router.patch("/delete/:id", async function (req, res) {
  const id = req.params.id;

  const selectedCourse = await courseModel.singleById(id);
  if (selectedCourse === null) {
    return res.json({
      msg: "Nothing to delete",
    });
  }

  await courseModel.delete(id);
  res.json({
    msg: "Delete successful",
  });
});

// Update course
router.patch("/:id", async function (req, res) {
  const course = req.body;
  const id = req.params.id;

  const selectedCourse = await courseModel.singleById(id);
  if (selectedCourse === null) {
    return res.json({
      msg: "Nothing to update",
    });
  }

  const ids = await courseModel.update(id, course);
  return res.json({
    course,
    msg: "Course is update successfully!",
  });
});

// Fetch Newest Course
router.get("/new/:limit", async function (req, res) {
  const limit = req.params.limit;
  const courses = await courseModel.newestCourse(limit);
  const coursesIncludeCategoryName = [];
  for (let course of courses) {
    let category = await categoryModel.singleById(course.category_id);
    if (category) {
      course.categoryName = category.catName;
      coursesIncludeCategoryName.push(course);
    }
  }

  res.json(coursesIncludeCategoryName);
});

// Fetch Most View Course
router.get("/mostview/:limit", async function (req, res) {
  const limit = req.params.limit;
  const courses = await courseModel.mostViewCourse(limit);
  const coursesIncludeCategoryName = [];
  for (let course of courses) {
    let category = await categoryModel.singleById(course.category_id);
    if (category) {
      course.categoryName = category.catName;
      coursesIncludeCategoryName.push(course);
    }
  }

  res.json(coursesIncludeCategoryName);
});

router.patch("/view/:id", async function (req, res) {
  const id = req.params.id;

  const selectedCourse = await courseModel.singleById(id);
  if (selectedCourse === null) {
    return res.json({
      msg: "Nothing to update",
    });
  }

  const ids = await courseModel.updateView(id);
  return res.json({
    msg: "Course is update successfully!",
  });
});

//upload image
router.patch("/upload-image/:id", async function (req, res) {
  const id = req.params.id;
  const course = await courseModel.singleById(id);
  if (course) {
    const fileStr = req.body.data;
    try {
      const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "elearning",
      });
      if (uploadedResponse) {
        await courseModel.update(id, {
          image: uploadedResponse.secure_url,
        });
        return res.json({
          msg: "Update course image successfully!",
          image: uploadedResponse.secure_url,
        });
      }
      return res.status(202).json({
        msg: "Upload error!",
      });
    } catch (error) {
      throw error;
    }
  }

  return res.status(202).json({
    msg: "Course is not exist",
  });
});

module.exports = router;
