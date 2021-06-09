const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("Hello user");
});

// Get single user
router.get("/:id", function (req, res) {});
module.exports = router;
