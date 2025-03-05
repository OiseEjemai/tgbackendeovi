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

  await bot.sendMessage(chatId, "Welcome to Eovi a social media app where users can make post, comment, like and follow other users. For more information, use /help command to know everything about Eovi and to get started.", {
    reply_markup: {
      inline_keyboard: [[{ text: "Open Eovi", web_app: { url: FRONTEND_URL } }]],
    },
  });
});

bot.onText(/\/help/, async (msg) => {
  const chatId = msg.chat.id;

  await bot.sendMessage(chatId, "Welcome to Eovi, a social media app where users can make post, comment, like and follow other users. \n HOW TO GET STARTED \n  - Sign up to Eovi in other to access its full contents. Tell us information such as your Name, Username, Email, etc \n - That is it, you are good to go. \n To get started, use the /start command.", {
    // reply_markup: {
    //   inline_keyboard: [[{ text: "Open App", web_app: { url: FRONTEND_URL } }]],
    // },
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
