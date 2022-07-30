const { Telegraf } = require("telegraf");
const dotenv = require('dotenv');
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker Ted'));
bot.on('sticker', (ctx) => ctx.reply('👌 '));
bot.hears('hi', (ctx) => ctx.reply('Hey Ted'));
bot.launch();

//Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));