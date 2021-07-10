const userModel = require("../models/user.model");
const { all } = require("../routes/user.route");

const UserService = {
  async all() {
    const listOfUser = await userModel.all();
    console.log(listOfUser);
  },
};

module.exports = UserService;
