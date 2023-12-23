const userModel = require("../models/users");

module.exports.addUser = async (user) => await userModel.insertMany([user]);

module.exports.deleteUser = async (telegram_id) =>
  await userModel.deleteOne({ telegram_id });

module.exports.updateUser = async (user) =>
  await userModel.updateOne({ telegram_id: user.telegram_id }, { user });

module.exports.getUser = async (telegram_id) =>
  await userModel.findOne({ telegram_id });

module.exports.getUsers = async (filter) => await userModel.find(filter);
