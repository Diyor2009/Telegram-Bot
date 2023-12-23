const { Composer } = require("telegraf");

const indexWizard = new Composer();

indexWizard.on("message", (context) => {
  context.wizard.state.user = { telegram_id: context.from.id };
  context.reply("Iltimos ismingizni kiriting...");
  context.wizard.next();
});

module.exports = indexWizard;
