const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const lessonModel = require("../models/lesson.model");
const courseModel = require("../models/course.model");
const { cloudinary } = require("../utils/cloudinary");

router.get("/", async function (req, res) {
  const lessons = await lessonModel.all();
  filterLessons = lessons.map((lesson) => {
    delete lesson.isDeleted;
    return lesson;
  });
  return res.json(filterLessons);
});

router.get("/teacher/:id", async function (req, res) {
  const id = req.params.id;
  const lessons = await lessonModel.allForTeacher(id);
  filterLessons = lessons.map((lesson) => {
    delete lesson.isDeleted;
    return lesson;
  });
  res.json(filterLessons);
});

router.get("/user/:id", async function (req, res) {
  const id = req.params.id;
  const lessons = await lessonModel.allForUser(id);
  res.json(lessons);
});

router.get("/:id", async function (req, res) {
  const id = req.params.id;
  const lesson = await lessonModel.singleById(id);
  if (!lesson) {
    return res.json({
      msg: `lesson with id=${id} is not found`,
    });
  }

  res.json(lesson);
});

// Add new lesson
router.post("/", async function (req, res) {
  let lesson = req.body;
  const isExistCourse = await courseModel.singleById(lesson.course_id);
  if (!isExistCourse) {
    return res.status(400).json({
      msg: "Course is not exist!",
    });
  }

  // Handle image
  const { video } = lesson;
  const uploadResponse = await cloudinary.uploader.upload(video, {
    upload_preset: "elearning",
    resource_type: "video",
  });

  lesson = {
    ...lesson,
    id: uuidv4(),
    logCreatedDate: new Date(),
    logUpdatedDate: new Date(),
    video: uploadResponse.secure_url,
  };

  const ids = await lessonModel.add(lesson);

  return res.status(201).json({
    msg: "Upload lesson succesfully",
    lesson,
  });
});

// Delete lesson
router.patch("/delete/:id", async function (req, res) {
  const id = req.params.id;

  const selectedLesson = await lessonModel.singleById(id);
  if (selectedLesson === null) {
    return res.json({
      msg: "Nothing to delete",
    });
  }

  await lessonModel.delete(id);
  res.json({
    msg: "Delete successful",
  });
});

// Update lesson
router.patch("/:id", async function (req, res) {
  const lesson = req.body;
  const id = req.params.id;

  const selectedLesson = await lessonModel.singleById(id);
  if (selectedLesson === null) {
    return res.json({
      msg: "Nothing to update",
    });
  }

  const ids = await lessonModel.update(id, lesson);
  return res.json({
    lesson,
    msg: "Lesson is update successfully!",
  });
});
module.exports = router;
