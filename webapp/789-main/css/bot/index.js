const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, {
  polling: true
}
);

const webAppUrl = 'https://tonsite.vercel.app';
// Remplace par ton vrai lien

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Clique ici pour accéder à la boutique 🛍️", {
    reply_markup: {
      inline_keyboard: [[ {
        text: "🛒 Ouvrir Big Menu",
        web_app: {
          url: webAppUrl
        }

      }
      ]]
    }

  }
  );
}
);
