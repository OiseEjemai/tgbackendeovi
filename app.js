require("dotenv").config();
const express = require("express");
const TelegramBot = require("node-telegram-bot-api");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const BOT_TOKEN = process.env.BOT_TOKEN;
const FRONTEND_URL = "https://eovi-social.vercel.app"; // Update with your Vercel frontend URL

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;

  await bot.sendMessage(
    chatId,
    "👋 *Welcome to Eovi!* \n\n"
    + "Eovi is a *social media app* where you can *post, comment, like, and follow* others. Stay connected and explore engaging content! 🌍 \n\n"
    + "🔹 *Tap below to start using Eovi!* 👇", 
    {
      reply_markup: {
        inline_keyboard: [[{ text: "🌐 Open Eovi", web_app: { url: FRONTEND_URL } }]],
      },
    }
  );
});


bot.onText(/\/help/, async (msg) => {
  const chatId = msg.chat.id;

  await bot.sendMessage(
    chatId,
    "📌 *Need help with Eovi?* \n\n"
    + "Eovi lets you: \n"
    + "✅ *Post & share* your thoughts\n"
    + "✅ *Like & comment* on posts\n"
    + "✅ *Follow & connect* with others\n\n"
    + "🎯 *Getting started is simple!* \n"
    + "1️⃣ *Sign up* with your Name & Username\n"
    + "2️⃣ Start exploring and engaging with the community! \n\n"
    + "🛠 For further assistance, visit our support or use /start to relaunch.", 
    {
      reply_markup: {
        inline_keyboard: [[{ text: "🚀 Open Eovi", web_app: { url: FRONTEND_URL } }]],
      },
    }
  );
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
