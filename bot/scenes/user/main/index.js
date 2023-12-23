const { Scenes } = require("telegraf");
const indexWizard = require("./wizards/index.wizard");

const userScene = new Scenes.WizardScene(
  "userScene",
  indexWizard,
);

module.exports = userScene;
