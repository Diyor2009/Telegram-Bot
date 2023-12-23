const { Scenes, Markup, Composer } = require("telegraf");
const { keyboards } = require("../../../utils/keyboards");
const admins_messages = require("../../middleware/admin");

const indexWizard = new Composer();

indexWizard.on("message", (context) => {
  context.reply("Welcome to admin panel...", Markup.keyboard(keyboards.admin));
  context.wizard.next();
});

const performCommandWizard = new Composer();

performCommandWizard.on("message", (context) => {
  const this_message = admins_messages[context.message.text];
  this_message ? this_message(context) : "";
});

const adminScene = new Scenes.WizardScene(
  "adminScene",
  indexWizard,
  performCommandWizard
);

module.exports = adminScene;
