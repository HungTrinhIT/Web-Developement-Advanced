const express = require("express");
const router = express.Router();

// Get all
router.get("/", function (req, res) {
  res.send("Course world");
});

// Get single by ID
router.get("/:id", function (req, res) {
  res.send("Get single by ID");
});

// Add new course
router.post("/", function (req, res) {
  res.send("Hello world");
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
