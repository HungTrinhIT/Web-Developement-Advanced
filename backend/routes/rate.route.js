const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const rateModel = require("../models/rate.model");
const userModel = require("../models/user.model");
const { cloudinary } = require("../utils/cloudinary");

router.get("/", async function (req, res) {
  const rates = await rateModel.all();
  const ratesWithUserInfo = [];
  for (let rate of rates) {
    let user = await userModel.singleById(rate.user_id);
    if (user) {
      rate.avatar = user.avatar;
      rate.fullname = user.fullname;
      ratesWithUserInfo.push(rate);
    }
  }

  res.json(ratesWithUserInfo);
});

router.get("/course/:id", async function (req, res) {
  const id = req.params.id;
  const rates = await rateModel.allByCourse(id);
  const ratesWithUserInfo = [];
  for (let rate of rates) {
    let user = await userModel.singleById(rate.user_id);
    if (user) {
      rate.avatar = user.avatar;
      rate.fullname = user.fullname;
      ratesWithUserInfo.push(rate);
    }
  }

  res.json(ratesWithUserInfo);
});

router.get("/:id", async function (req, res) {
  const id = req.params.id;
  const rate = await rateModel.singleById(id);
  if (!rate) {
    return res.json({
      msg: `rate with id=${id} is not found`,
    });
  }

  res.json(rate);
});

// Add new rate
router.post("/", async function (req, res) {
  let rate = req.body;
  
  const isExist = await rateModel.singleByBothId(rate.course_id, rate.user_id);
  if (isExist) {
    let {content=isExist.content, value=isExist.value} = rate;
    const ids = await rateModel.update(isExist.id, {
      "content": content,
      "value": value
    });
    return res.status(201).json({
      rate: ids
    });
  }
  else {
    const rateId = uuidv4();
    rate = {
      ...rate,
      id: rateId,
      logCreatedDate: new Date(),
      logUpdatedDate: new Date(),
    };
    const ids = await rateModel.add(rate);
    return res.status(201).json({
      rate: ids
    })
  }
});

// Delete rate
router.patch("/delete/:id", async function (req, res) {
  const id = req.params.id;

  const selectedRate = await rateModel.singleById(id);
  if (selectedRate === null) {
    return res.json({
      msg: "Nothing to delete",
    });
  }

  await rateModel.delete(id);
  res.json({
    msg: "Delete successful",
  });
});

// Update rate
router.patch("/:id", async function (req, res) {
  const rate = req.body;
  const id = req.params.id;

  const selectedRate = await rateModel.singleById(id);
  if (selectedRate === null) {
    return res.json({
      msg: "Nothing to update",
    });
  }

  const ids = await rateModel.update(id, rate);
  return res.json({
    rate,
    msg: "rate is update successfully!",
  });
});
module.exports = router;
