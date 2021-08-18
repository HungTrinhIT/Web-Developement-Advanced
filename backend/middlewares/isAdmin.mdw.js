const userModel = require("../models/user.model");

module.exports = async (req, res, next) => {
  try {
    const user = req.user;

    const currentUser = await userModel.singleById(user.responseUser.id);
    console.log(currentUser);
    if (currentUser.role === 0) {
      next();
    } else {
      return res.status(403).send("Access denied");
    }
  } catch (error) {
    res.status(400).send("Invalid token");
  }
};
