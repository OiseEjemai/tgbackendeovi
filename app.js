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

  await bot.sendMessage(chatId, 
    "👋 Welcome to *Eovi*! \n\n"
    + "Eovi is a social media platform where you can *post, comment, like, and follow* other users. \n\n"
    + "Need help? Use the /help command to learn more about Eovi and how to get started! 🚀", 
    {
      reply_markup: {
        inline_keyboard: [[{ text: "🌐 Open Eovi", web_app: { url: FRONTEND_URL } }]],
      },
    }
  );
});

bot.onText(/\/help/, async (msg) => {
  const chatId = msg.chat.id;

  await bot.sendMessage(chatId, 
    "📌 *Eovi Help Guide* \n\n"
    + "Eovi is a social media app where you can *post, comment, like, and follow* other users. \n\n"
    + "🔹 *How to Get Started:* \n"
    + "1️⃣ *Sign up* for an account to unlock all features. Provide details like *Name, Username, and Email*.\n"
    + "2️⃣ Once signed up, you’re all set to explore and connect with others!\n\n"
    + "To start using Eovi, type /start or click the button below. 👇", 
    {
      reply_markup: {
        inline_keyboard: [[{ text: "🚀 Get Started", web_app: { url: FRONTEND_URL } }]],
      },
    }
  );
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
