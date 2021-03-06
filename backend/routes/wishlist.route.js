const express = require("express");
const router = express.Router();
const wishListModel = require("../models/wishlist.model");
const courseModel = require("../models/course.model");
const { v4: uuidv4 } = require("uuid");

// Get all
router.get("/", async function (req, res) {
  const wishlist = await wishListModel.all();
  const wishListIncludeCourseName = [];
  for (let wish of wishlist) {
    let course = await courseModel.singleById(wish.course_id);
    if (course) {
      wish.courseName = course.courseName;
      wishListIncludeCourseName.push(wish);
    }
  }

  res.json(wishListIncludeCourseName);
});

// Get all by UserID
router.get("/user/:id", async function (req, res) {
  const user_id = req.params.id;
  const wishlist = await wishListModel.allByUserId(user_id);
  const wishListIncludeCourseName = [];
  for (let wish of wishlist) {
    let course = await courseModel.singleById(wish.course_id);
    if (course) {
      wish.courseName = course.courseName;
      wishListIncludeCourseName.push(wish);
    }
  }

  res.json(wishListIncludeCourseName);
});

// Get single by userID and courseID
router.get("/:course_id/:user_id", async function (req, res) {
  const course_id = req.params.course_id;
  const user_id = req.params.user_id;
  const wish = await wishListModel.singleByBothId(course_id, user_id);
  console.log(wish);
  if (wish === null) {
    return res.json({
      isExist: false
    });
  }

  return res.json({
    isExist: true,
    wish: wish
  });
});

// Get single by ID
router.get("/wish/:id", async function (req, res) {
  const id = req.params.id;
  const wish = await wishListModel.singleById(id);

  if (wish === null) {
    res.json({
      msg: `Wish with id=${id} is not found`,
    });
  }

  res.json(wish);
});

// Add new wish
router.post("/", async function (req, res) {
  let wish = req.body;
  const isExist = await wishListModel.singleByBothId(wish.course_id, wish.user_id);
  if (isExist) {
    const ids = await wishListModel.update(isExist.id, {
      isDeleted: false
    });
    return res.status(201).json({
      wish: ids
    });
  }
  else {
    const wishId = uuidv4();
    wish = {
      ...wish,
      id: wishId,
      logCreatedDate: new Date(),
      logUpdatedDate: new Date(),
    };
    const ids = await wishListModel.add(wish);
    return res.status(201).json({
      wish: ids
    })
  }

});

// Delete wish
router.patch("/delete/:id", async function (req, res) {
  const id = req.params.id;

  const selectedWish = await wishListModel.singleById(id);
  if (selectedWish === null) {
    return res.json({
      msg: "Nothing to delete",
    });
  }

  await wishListModel.delete(id);
  res.json({
    msg: "Delete successful",
  });
});

// Update wish
router.patch("/:id", async function (req, res) {
  const wish = req.body;
  const id = req.params.id;

  const selectedWish = await wishListModel.singleById(id);
  if (selectedWish === null) {
    return res.json({
      msg: "Nothing to update",
    });
  }

  const ids = await wishListModel.update(id, wish);
  return res.json({
    wish,
    msg: "Update successful",
  });
});
module.exports = router;
