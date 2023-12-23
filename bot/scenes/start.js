const { Scenes, Composer } = require("telegraf");
const { isAdmin, isUserRegisted, raiseUserReferal } = require("../middleware");
const { userIsNotRegisted } = require("../../utils/messages/user");

const indexWizard = new Composer();

indexWizard.on("message", async (context) => {
  if (await isUserRegisted(context.from.id)) {
    console.log("test");
    await context.scene.enter("userScene");
  } else if (await isAdmin(context.from.id)) {
    await context.scene.enter("adminScene");
  } else {
    const from = context.message.text.slice(7, context.message.text.length);
    if (from.length) {
      from.startsWith("user")
        ? console.log("from USER")
        : from.startsWith("admin")
        ? console.log("from ADMIN")
        : "";
      from.length ? await raiseUserReferal(from) : "";
    }
    context.replyWithHTML(userIsNotRegisted).then(() => {
      context.scene.enter("userRegistrateScene");
    });
    return await context.scene.leave();
  }
});

const startScene = new Scenes.WizardScene("startScene", indexWizard);

module.exports = startScene;
