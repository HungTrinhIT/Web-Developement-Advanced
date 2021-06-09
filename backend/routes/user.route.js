const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");
// Get all
router.get("/", async function (req, res) {
  const users = await userModel.all();
  res.json(users);
});

// Get single by ID
router.get("/:id", async function (req, res) {
  const id = req.params.id;
  const user = await userModel.singleById(id);

  if (user === null) {
    res.json({
      msg: `User with id=${id} is not found`,
    });
  }

  res.json(user);
});

// Add new user
router.post("/", async function (req, res) {
  const user = req.body;
  const ids = await userModel.add(user);
  user.id = ids[0];
  res.status(201).json(user);
});

// Delete user
router.patch("/delete/:id",async function (req, res) {
  const id = req.params.id;

  const selectedUser = await userModel.singleById(id)
  if (selectedUser === null){
    return res.json({
      msg: "Nothing to delete",
    });
  }

  await userModel.delete(id);
  res.json({
    msg: "Delete successful",
  }); 
});

// Update user
router.patch("/:id",async function (req, res) {
  const user = req.body;
  const id = req.params.id;

  const selectedUser = await userModel.singleById(id)
  if (selectedUser === null){
    return res.json({
      msg: "Nothing to update",
    })
  }

  const ids = await userModel.update(id, user);
  return res.json({
    user,
    msg: "Update successful",
  })
});
module.exports = router;