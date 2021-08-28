const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { cloudinary } = require("../utils/cloudinary");

const courseModel = require("../models/course.model");
const categoryModel = require("../models/category.model");
const userModel = require("../models/user.model");
const queryString = require("query-string");
// Get all
router.get("/", async function (req, res) {
  const query = req.query;
  const coursesIncludeCategoryName = [];
  let { page = 1, limit = 10 } = query;
  page = parseInt(page);
  if (page < 1) {
    page = 1;
  }
  const courses = await courseModel.all(query);

  for (let course of courses) {
    let category = await categoryModel.singleById(course.category_id);
    let teacher = await userModel.singleById(course.teacher_id);
    if (category) {
      course.categoryName = category.catName;
      coursesIncludeCategoryName.push(course);
    }
    if (teacher) {
      course.fullname = teacher.fullname;
      coursesIncludeCategoryName.push(course);
    }
  }
  const totalCourses = courses.length;
  const totalPage =
    totalCourses % 10 === 0
      ? Math.floor(totalCourses / limit)
      : Math.floor(totalCourses / limit) + 1;
  if (page > totalPage) {
    page = totalPage;
  }
  const coursePaging = courses.slice((page - 1) * limit, page * limit);

  res.json({
    totalCourses,
    courses: coursePaging,
    currentPage: page,
    totalPage:
      totalCourses % 10 === 0
        ? Math.floor(totalCourses / limit)
        : Math.floor(totalCourses / limit) + 1,
  });
});

router.get("/lastweek", async function (req, res) {
  const courses = await courseModel.allLastWeek();
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

router.get("/mostparticipants", async function (req,res){
  const students = await courseModel.mostParticipants();
  const studentsIncludeCategoryName = [];
  for (let student of students)
  {
    let category = await categoryModel.singleById(student.category_id);

    if (category) {
      student.catName = category.catName;
      studentsIncludeCategoryName.push(student);
    }
  }
  
  res.json(studentsIncludeCategoryName);
});

// Get single by ID
router.get("/:id", async function (req, res) {
  const id = req.params.id;
  let course = await courseModel.singleById(id);

  if (course === null) {
    return res.json({
      msg: `Course is not exist`,
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



// Complete course
router.patch('/complete/:id',async function(req,res){
  const id = req.params.id;
  
  const course = await courseModel.singleById(id);
  if(!course) return res.status(202).send("Course is not exist");
  
  await courseModel.update(id, {
    isCompleted: true
  })
  return res.json({
    msg:"Course is complete"
  })
})

// Uncomplete course
router.patch('/incomplete/:id',async function(req,res){
  const id = req.params.id;
  const course = await courseModel.singleById(id);
  
  if(!course) return res.status(400).send("Course is not eixst");
  
  
  await courseModel.update(id, {
    isCompleted: false
  })
  return res.json({
    msg:"Course is incomplete"
  })
})


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
