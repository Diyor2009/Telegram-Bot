const { Markup } = require("telegraf");
const { Keyboard } = require("telegram-keyboard");
const { getUser } = require("../../db/crud/users");

module.exports["📤 Post"] = async (context) => {
  await context.scene.leave().then(context.scene.enter("postScene"));
};

module.exports["🤵🏻 Add new admin"] = async (context) => {
  context.reply("Added.");
  context.scene.enter("adminScene");
};

module.exports["📊 Chart"] = async (context) => {
  const not_received_messages = (await getUser(context.from.id))
    .not_received_messages;
  var chart = `${not_received_messages}`;
  context.reply(chart);
  return context.scene.leave();
};

// module.exports. = (context) => {};
