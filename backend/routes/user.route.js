const express = require("express");
const validate = require("../middlewares/validate");
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");

const userSchema = require("../schemas/user.json");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
// Get all
router.get("/", async function (req, res) {
  const users = await userModel.all();
  return res.json(users);
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

router.post("/", validate(userSchema), async (req, res, next) => {
  const user = req.body;
  const isUsernameExist = await userModel.singleByName(user.username);
  const isEmailExist = await userModel.singleByEmail(user.email);
  if (isUsernameExist && isEmailExist) {
    return res.status(202).json({
      msg: "Username and email have already existed!",
    });
  } else if (isUsernameExist) {
    return res.status(202).json({
      msg: "Username have already existed!",
    });
  } else if (isEmailExist) {
    return res.status(202).json({
      msg: "Email have already existed!",
    });
  } else {
    const newUser = {
      ...user,
      id: uuidv4(),
      logCreatedDate: new Date(),
      logUpdatedDate: new Date(),
      role: +user.role,
      password: bcrypt.hashSync(user.password, 10),
    };
    await userModel.add(newUser);
    delete newUser.password;

    return res.status(201).json(newUser);
  }

  return res.status(202).json({
    msg: "Error",
  });
});

// Delete user
router.patch("/delete/:id", async function (req, res) {
  const id = req.params.id;

  const selectedUser = await userModel.singleById(id);
  if (selectedUser === null) {
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
router.patch("/:id", async function (req, res) {
  const user = req.body;
  const id = req.params.id;

  const selectedUser = await userModel.singleById(id);
  if (selectedUser === null) {
    return res.json({
      msg: "Nothing to update",
    });
  }

  const ids = await userModel.update(id, user);
  return res.json({
    user,
    msg: "Update successful",
  });
});
module.exports = router;
