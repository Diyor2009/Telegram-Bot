const { Composer } = require("telegraf");
const users_messages = require("../../../../middleware/user");

const indexWizard = new Composer();

indexWizard.on("message", (context) => {
  const this_message = users_messages[context.message.text];
  return this_message
    ? this_message(context)
    : context.scene.leave().then(() => {
        context.scene
          .enter("helpScene")
          // .then(() => context.scene.enter("userScene"));
      });
});

module.exports = indexWizard;
