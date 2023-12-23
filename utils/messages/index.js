module.exports.help = async (context) =>
  await context.replyWithHTML(`
<b>Can I help you?</b>\n
These are my all commands:\n
/start - starts the bot
/help - the documentation of this bot
/me - shows your data
/edit - to edit your data
/delete - to delete your data
`);
