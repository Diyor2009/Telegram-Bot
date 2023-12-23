const { Scenes } = require("telegraf");
const { help } = require("../../utils/messages");

const helpScene = new Scenes.WizardScene("helpScene", (context) =>
  help(context).then(() => context.scene.leave())
);

module.exports = helpScene;
