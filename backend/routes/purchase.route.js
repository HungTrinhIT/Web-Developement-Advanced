const express = require("express");
const router = express.Router();
const purchaseModel = require("../models/purchase.model");
const courseModel = require("../models/course.model");
const { v4: uuidv4 } = require("uuid");

// Get all
router.get("/", async function (req, res) {
    const purchases = await purchaseModel.all();
    const purchaseIncludeCourseName = [];
    for (let purchase of purchases) {
        let course = await courseModel.singleById(purchase.course_id);
        if (course) {
            purchase.courseName = course.courseName;
            purchaseIncludeCourseName.push(purchase);
        }
    }

    res.json(purchaseIncludeCourseName);
});

// Get all by UserID
router.get("/user/:id", async function (req, res) {
    const user_id = req.params.id;
    const purchases = await purchaseModel.allByUserId(user_id);
    const purchaseIncludeCourseName = [];
    for (let purchase of purchases) {
        let course = await courseModel.singleById(purchase.course_id);
        if (course) {
            purchase.courseName = course.courseName;
            purchase.isCompleted = course.isCompleted;
            purchaseIncludeCourseName.push(purchase);
        }
    }

    res.json(purchaseIncludeCourseName);
});

// Get single by userID and courseID
router.get("/:course_id/:user_id", async function (req, res) {
    const course_id = req.params.course_id;
    const user_id = req.params.user_id;
    const purchase = await purchaseModel.singleByBothId(course_id, user_id);
    console.log(purchase);
    if (purchase === null) {
      return res.json({
        isExist: false
      });
    }
  
    return res.json({
      isExist: true,
      purchase: purchase
    });
  });

// Add new purchase
router.post("/", async function (req, res) {
    let purchase = req.body;
    let course = await courseModel.singleById(purchase.course_id);
    const purchaseID = uuidv4();
    purchase = {
        ...purchase,
        id: purchaseID,
        fee: course.sale ? (course.price * (100 - course.sale) / 100) : course.price,
        logCreatedDate: new Date(),
        logUpdatedDate: new Date(),
    };
    await courseModel.update(purchase.course_id, {
        "currentStudent" : +course.currentStudent + 1
    })
    const ids = await purchaseModel.add(purchase);
    return res.status(201).json({
        purchase: ids
    })
});

// Delete purchase
router.patch("/delete/:id", async function (req, res) {
    const id = req.params.id;

    const selectedPurchase = await purchaseModel.singleById(id);
    if (selectedPurchase === null) {
        return res.json({
            msg: "Nothing to delete",
        });
    }

    await purchaseModel.delete(id);
    res.json({
        msg: "Delete successful",
    });
});

// Update purchase
router.patch("/:id", async function (req, res) {
    const purchase = req.body;
    const id = req.params.id;

    const selectedPurchase = await purchaseModel.singleById(id);
    if (selectedPurchase === null) {
        return res.json({
            msg: "Nothing to update",
        });
    }

    const ids = await purchaseModel.update(id, purchase);
    return res.json({
        purchase,
        msg: "Update successful",
    });
});
module.exports = router;