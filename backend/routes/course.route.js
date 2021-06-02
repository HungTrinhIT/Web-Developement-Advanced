const express = require("express");
const router = express.Router();
const courseModel = require("../models/course.model");
// Get all
router.get("/", async function (req, res) {
  const courses = await courseModel.all();
  res.json(courses);
});

// Get single by ID
router.get("/:id", async function (req, res) {
  const id = req.params.id;
  const course = await courseModel.singleById(id);

  if (course !== null) {
    res.json({
      msg: `Course with id=${id} is not found`,
    });
  }

  res.json(course);
});

// Add new course
router.post("/", async function (req, res) {
  const course = req.body;
  const ids = await courseModel.add(course);
  course.id = ids[0];
  res.json(course);
});

// Delete course
router.patch("/:id", function (req, res) {
  res.send("Hello world");
});

// Update course
router.put("/:id", function (req, res) {
  res.send("Hello world");
});
module.exports = router;
