const TelegramBot = require("node-telegram-bot-api");

const token = "7782480769:AAEYaBLEQrGlhLBULyfLBTWqb63aVpBGFlI";
const webAppUrl = "https://magiccoffee-d17d0.web.app";
// "https://miniapp-1138f.web.app";
// "https://6755ad4a1f54799db201fec2--eloquent-hotteok-fb33fa.netlify.app/";
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  if (text === "/start") {
    bot.sendSticker(
      chatId,
      "https://cdn.tlgrm.ru/stickers/734/da5/734da5f4-1859-4407-96a0-0ddd631e2813/3.webp"
    );
    bot.sendMessage(chatId, "Добро пожаловать!", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "MiniApp", web_app: { url: webAppUrl + "/form" } }],
        ],
      },
    });
  }

  if (text === "/info") {
    bot.sendMessage(chatId, `Запуск demo-версии сайта Pallette`);
  }
});
