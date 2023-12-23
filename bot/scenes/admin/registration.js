const { Scenes, Composer } = require("telegraf");

const indexWizard = new Composer();

indexWizard.on("message", (context) => {
  context.reply("Welcome to admins' registration scene.");
  context.scene.enter("adminScene");
});

const adminRegistrateScene = new Scenes.WizardScene(
  "adminRegistrateScene",
  indexWizard
);

module.exports = adminRegistrateScene;
