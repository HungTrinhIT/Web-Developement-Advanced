const express = require("express");
const validate = require("../middlewares/validate");
const authSchema = require("../schemas/auth.json");
const bcrypt = require("bcryptjs");
const router = express.Router();
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const randomstring = require("randomstring");
router.post("/", validate(authSchema), async (req, res, next) => {
  const user = await userModel.singleByName(req.body.username);
  if (!user) {
    return res.json({
      authenticated: false,
    });
  }
  if (!bcrypt.compareSync(req.body.password, user.password)) {
    return res.json({
      authenticated: false,
    });
  }
  const { username, id, avatar, fullname, email } = user;
  const responseUser = {
    username,
    id,
    avatar,
    fullname,
    email,
  };

  const accessToken = jwt.sign(
    {
      responseUser,
    },
    "SECRET_KEY",
    {
      expiresIn: 60 * 60 * 24 * 15, // 15 ngay
    }
  );

  const refreshToken = randomstring.generate();
  await userModel.updateRefreshToken(user.id, refreshToken);

  return res.json({
    authenticated: true,
    accessToken,
    refreshToken,
  });
});

module.exports = router;
