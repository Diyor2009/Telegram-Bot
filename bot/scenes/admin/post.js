const { Composer, Scenes, Markup } = require("telegraf");
const { getUsers } = require("../../../db/crud/users");

const indexWizard = new Composer();

indexWizard.on("message", (context) => {
  context.reply("Send message for post...", Markup.removeKeyboard());
  context.wizard.next();
});

const getPostWizard = new Composer();

getPostWizard.on("message", async (context) => {
  context.wizard.state.message_id = context.message.message_id;
  context
    .reply(
      "Are you sure?",
      Markup.inlineKeyboard([
        [
          { text: "Yes", callback_data: "yes" },
          { text: "No", callback_data: "no" },
        ],
        [],
      ])
    )
    .then(() => context.wizard.next());
});

const sureWizard = new Composer();

sureWizard.action(["yes", "no"], async (context) => {
  const data = context.update.callback_query.data;
  if (data == "yes") {
    const users = await getUsers();
    users.forEach(async (user) => {
      await context.telegram
        .copyMessage(
          user.telegram_id,
          context.chat.id,
          context.wizard.state.message_id
        )
        .then(() => {
          context.reply("✅ Message is posted successfully.");
        });
    });
  } else {
    await context.reply("✅ Sending post was discontinued successfully.");
  }
  await context.answerCbQuery().then(() => context.scene.enter("adminScene"));
});

const postScene = new Scenes.WizardScene(
  "postScene",
  indexWizard,
  getPostWizard,
  sureWizard
);

module.exports = postScene;
