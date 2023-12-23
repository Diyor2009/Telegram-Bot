const { Composer, Markup } = require("telegraf");
const { Keyboard } = require("telegram-keyboard");
const { keyboards } = require("../../../../../utils/keyboards");

const regions_keyboard = Markup.keyboard(
  Keyboard.make(keyboards.regions, { columns: 2 }).buttons
);

const getNameWizard = new Composer();

getNameWizard.on("message", async (context) => {
  const isMessageInvalid =
    /[^a-zA-Z]+/g.test(context.message.text) ||
    context.message.text?.length < 3;
  if (isMessageInvalid) {
    context.reply("Iltimos ismingizni to'gri kiriting...");
    return;
  } else {
    context.wizard.state.user.name = context.message.text;
    await context
      .reply("Iltimos yashayotgan regionizni tanlang...", regions_keyboard)
      .then(() => context.wizard.next());
  }
});

module.exports = getNameWizard;
