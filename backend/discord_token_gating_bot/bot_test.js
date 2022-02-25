require("dotenv").config();

const {
  Client,
  WebhookClient
} = require('discord.js');
const { wait } = require("signale/types");

const client = new Client({
  partials: ['MESSAGE', 'REACTION']
});

// const webhookClient = new WebhookClient(
//   process.env.WEBHOOK_ID,
//   process.env.WEBHOOK_TOKEN,
// );

const PREFIX = "$";

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in.`);
  const channel = client.channels.cache.find(channel => channel.name === 'kigzag-rules');
  // channel.send('Hello all');
  const Guilds = client.guilds.cache.map(guild => guild);
  // console.log(Guilds);
  // const channel = Guilds[0].channels.cache.filter(chx => chx.type === "text").find(x => x.position === 0);
  // console.log(channel);
  channel.send('hello I am test bot 2');
  // // client.emit('message', 'message');
  // channel.messages.fetch({
  //   limit: 100
  // }).then(messages => {
  //   console.log(`Received ${messages.size} messages`);
  //   //Iterate through the messages here with the variable "messages".
  //   messages.forEach(message => console.log(message.content))
  // });
});

client.login(process.env.DISCORDJS_TEST_BOT_TOKEN);