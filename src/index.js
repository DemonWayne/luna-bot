const { Client, Intents, Collection } = require('discord.js')
const { DISCORD_TOKEN } = require('dotenv').config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS], partials: ['MESSAGE', 'GUILD_MEMBER', 'REACTION'] })

client.commands = new Collection()
client.events = new Collection()

const handlers = ['command', 'event']
handlers.forEach(h => require(`./handlers/${h}`)(client))

const url = require('./database/connect')
url.connect()

client.login(DISCORD_TOKEN)