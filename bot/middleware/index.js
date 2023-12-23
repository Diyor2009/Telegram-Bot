const { addUser, getUser, updateUser } = require("../../db/crud/users");
const { getAdmin } = require("../../db/crud/admins");

module.exports.isUserRegisted = async (telegram_id) =>
  !!(await getUser(telegram_id));

module.exports.isAdmin = async (telegram_id) => !!(await getAdmin(telegram_id));

module.exports.registrateUser = async (user) => await addUser(user);

module.exports.raiseUserReferal = async (telegram_id) => {
  const user = await getUser(telegram_id);
  console.log(user.referals);
  await updateUser({ telegram_id, referals: user.referals + 1 });
};
