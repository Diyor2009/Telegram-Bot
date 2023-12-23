const adminModel = require("../models/admins");

module.exports.getAdmin = async (telegram_id = {}) =>
  await adminModel.findOne({ telegram_id });

module.exports.getAdmins = async (filter = {}) => await adminModel.find(filter);
