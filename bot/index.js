const { Markup } = require("telegraf");
const bot = require("../core/bot");
const { deleteUser } = require("../db/crud/users");

bot.start((context) => {
  context.scene.enter("startScene");
});

bot.command("delete", async (context) => {
  await deleteUser(context.from.id);
  context.reply("Your data is deleted");
});

bot.command("delete", async (context) => {
  context.reply("Your data is deleted");
});

bot.help((context) => {
  context.scene.enter("helpScene");
});

bot.catch((error, context) => {
  context.reply("Error");
  console.log("TelegrafError: \n", error);
});
