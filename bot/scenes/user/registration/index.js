const indexWizard = require("./wizards/index.wizard");
const getNameWizard = require("./wizards/name.wizard");
const getRegionWizard = require("./wizards/region.wizard");
const { Scenes, Markup, Composer } = require("telegraf");
const { registrateUser } = require("../../../middleware");
const { recomendation } = require("../../../../utils/messages/user");

const getContactWizard = new Composer();

getContactWizard.on("contact", async (context) => {
  const phone_number = context.message.contact.phone_number;
  context.wizard.state.user.phone_number = phone_number;
  await registrateUser(context.wizard.state.user).then(() => {
    context.replyWithHTML(recomendation, Markup.removeKeyboard()).then(() => {
      context.scene.enter("userScene");
    });
  });
  return await context.scene.leave();
});

const userRegistrateScene = new Scenes.WizardScene(
  "userRegistrateScene",
  indexWizard,
  getNameWizard,
  getRegionWizard,
  getContactWizard
);

module.exports = userRegistrateScene;
