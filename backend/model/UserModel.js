const mongoose = require("mongoose");
const UserSchema = require('../schemas/UserSchema');

const UserModel = new mongoose.model("User", UserSchema);

module.exports = UserModel;