require("dotenv").config();
const mongoose = require("mongoose");
const { Telegraf, Scenes, session } = require("telegraf");
const startScene = require("../bot/scenes/start");
const helpScene = require("../bot/scenes/help");
const registrateScene = require("../bot/scenes/user/registration");
const adminScene = require("../bot/scenes/admin");
const userScene = require("../bot/scenes/user/main");
const postScene = require("../bot/scenes/admin/post");

const bot = new Telegraf(process.env.TOKEN);

const stage = new Scenes.Stage([
  startScene,
  adminScene,
  postScene,
  userScene,
  registrateScene,
  helpScene,
]);

bot.use(session());
bot.use(stage.middleware());

mongoose
  .connect(process.env.DB_URL, { useNewUrlParser: false })
  .then(() => {
    bot.launch();
    console.log("DB connected.");
  })
  .catch((error) => {
    console.log("DB connection error.\n" + error);
  });

module.exports = bot;
