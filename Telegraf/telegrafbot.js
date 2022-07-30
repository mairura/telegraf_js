const { Telegraf } = require('telegraf');
const dotenv = require('dotenv');
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('quit', (ctx) => {
    //Explicit usage
    ctx.telegram.leaveChat(ctx.message.chat.id);

    //Using context shortcut
    ctx.leaveChat();
});

bot.on('text', (ctx) => {
    //Explicit usage
    ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`);

    //Using context shortcut
    ctx.reply(`Hellow ${ctx.state.role}`);
});

bot.on('callback_query', (ctx) => {
    //Explicit usage
    ctx.telegram.answerCbQuery(ctx.callbackQuery.id);

    //Using context shortcut
    ctx.answerCbQuery();
});

bot.on('inline_query', (ctx) => {
    //Explicit usage
    const result = [];

    //Using context shortcut
    ctx.answerInlineQuery(result)
});

bot.launch()

//Enable Graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));