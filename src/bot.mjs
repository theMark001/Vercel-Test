import TeleBot from "telebot";
import mongo from "./db.mjs";

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);

bot.on("text", msg => msg.reply.text(msg.text))

bot.on('start', (msg) => msg.reply.photo('https://picsum.photos/1000'));

bot.on('/env', (msg) => msg.reply.text(process.env.VERCEL_ENV || 'VERCEL_ENV is not defined'));

bot.on('/db', (msg) => msg.reply.text(mongo.db().databaseName));

export default bot;
