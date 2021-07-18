const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const courseModel = require("../models/course.model");
// Get all
router.get("/", async function (req, res) {
  const courses = await courseModel.all();
  res.json(courses);
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
    msg: "Update successful",
  });
});
module.exports = router;
