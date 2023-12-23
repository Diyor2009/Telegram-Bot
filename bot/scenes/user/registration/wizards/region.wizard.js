const { Composer, Markup } = require("telegraf");
const { Keyboard } = require("telegram-keyboard");
const { keyboards } = require("../../../../../utils/keyboards");

const regions_keyboard = Markup.keyboard(
  Keyboard.make(keyboards.regions, { columns: 2 }).buttons
);

const getRegionWizard = new Composer();

getRegionWizard.on("message", async (context) => {
  const IsIncorrectRegion = !keyboards.regions.filter(
    (region) => region.toLowerCase() === context.message.text.toLowerCase()
  ).length;
  if (IsIncorrectRegion) {
    context.reply(
      "Iltimos yashayotgan regionizni tanlang...",
      regions_keyboard
    );
    return;
  }
  context.wizard.state.user.region = context.message.text;
  context
    .reply("Iltimos, contactingizni jo'nating...", {
      reply_markup: {
        keyboard: [[{ text: "Contact jo'natish", request_contact: true }], []],
        resize_keyboard: true,
      },
    })
    .then(() => {
      context.wizard.next();
    });
});

module.exports = getRegionWizard;
