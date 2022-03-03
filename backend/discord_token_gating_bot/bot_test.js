require("dotenv").config();

const {
  Client,
  WebhookClient
} = require('discord.js');
const { wait } = require("signale/types");

const client = new Client({
  partials: ['MESSAGE', 'REACTION']
});

const PREFIX = "$";

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in.`);
  const channel = client.channels.cache.find(channel => channel.name === 'kigzag-rules');
  const Guilds = client.guilds.cache.map(guild => guild);
  channel.send('hello I am test bot 2');
});

client.login(process.env.DISCORDJS_TEST_BOT_TOKEN);