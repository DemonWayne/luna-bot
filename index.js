// Special Version for Chris Walton

const { Client, Intents } = require('discord.js')
require('dotenv').config()
const mongoose = require('mongoose')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS], partials: ['MESSAGE', 'GUILD_MEMBER', 'REACTION'] })

// ХЕНДЛЕРЫ НЕ НУЖНЫ!
// ВСЕ ЭВЕНТЫ И КОМАНДЫ В ОДНОМ ФАЙЛЕ!
// ИНАЧЕ JAVASCRIPT - НЕ ИМЕЕТ СМЫСЛА!

mongoose.connect(process.env.DATABASE_URL)
mongoose.connection.on('connected', () => console.log('🤍 | База данных подключена!'))

client.login(process.env.DISCORD_TOKEN)

client.on('ready', (client) => {
  console.log(`💙 | Бот успешно запущен как ${client.user.tag}!`, `На часах: ${new Date().toLocaleString(`ru-RU`, { timeZone: `Europe/Moscow`, hour12: false})}`)
})

client.on('messageCreate', message => {
  if(message.channel.type === 'dm') return
  if(!message.content.startsWith('/')) return
  const args = message.content.slice(1).split(/ +/g)
  const cmd = args.shift().toLowerCase()

  if (cmd === 'check') {
    message.channel.send(`Ваш ник: ${message.member.displayName || message.user.username}`)
  }
})

// Special Version for Chris Walton