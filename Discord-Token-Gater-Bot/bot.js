//config
require("dotenv").config();

// Packages
const {
  Client,
  Intents,
  Discord,
  WebhookClient
} = require('discord.js');
const {
  Signale
} = require('signale');
const pool = require('./pool');
const {
  MessageActionRow,
  MessageEmbed,
  Interactions
} = require('discord.js');

// Variables
const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES);
const client = new Client({
  intents: myIntents
});
const logger = new Signale({
  scope: 'Discord'
});
// const webhookClient = new WebhookClient(
//   process.env.WEBHOOK_ID,
//   process.env.WEBHOOK_TOKEN,
// );

// const PREFIX = "$";

// Function to start the Discord bot
function main() {
  logger.info('Logging in...');
  client.login(process.env.DISCORDJS_BOT_TOKEN).catch(() => {
    logger.fatal('Failed to login! Is your intents enabled?');
    process.exit(0);
  }).then(() => {
    logger.success('Logged in!');
  });
}

// New Status
client.on('ready', () => {
  logger.info(`${client.user.tag} has logged in.`);
  const status = process.env.STATUS;
  client.user.setActivity(status, {
    type: 'LISTENING'
  });
  logger.success('Status Set!');
  const channel = client.channels.cache.find(channel => channel.name === 'kigzag-rules');
  // const Guilds = client.guilds.cache.map(guild => guild);
  // logger.info(Guilds);
  // const channel = Guilds[0].channels.cache.filter(chx => chx.type === "text").find(x => x.position === 0);
  // logger.info(channel);
  channel.send('hello I am test bot 1');
  // client.emit('message', 'message');
  // channel.messages.fetch({
  //   limit: 100
  // }).then(messages => {
  //   logger.info(`Received ${messages.size} messages`);
  //   //Iterate through the messages here with the variable "messages".
  //   messages.forEach(message => logger.info(message.content))
  // });
  // logger.info("users");
  // logger.info(Guilds[0].name);
  // Guilds[0].members.cache.forEach(member => logger.info(member.user.username)); 
  // logger.info("done");
  // logger.info(Guilds[0]);
  // client.users.cache.get(Guilds[0].ownerId).send('<message>');
});

// Interactions
client.on('interactionCreate', interaction => {
  // Embed define
  const sucess = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Sucess!')
    .setDescription('You sucessfully agreed to the rules!');
  if (!interaction.isButton()) return;
  if (interaction.isButton("rulesa")) {
    logger.info("User agreed to rules!")
    interaction.deferUpdate();
    const user = client.users.cache.get(interaction.user.id);
    user.send("You have sucessfully agreed to rules.").catch(console.error);
    const linkID = pool.createLink(user.id);

    const embed2 = new MessageEmbed()
      .setTitle(message.guild.name + " Subcription Plans")
      .setURL(`${process.env.HTTPS == 'true' ? 'https://' : 'http://'}${process.env.DOMAIN}:${process.env.HTTPS == 'true' ? '443' : process.env.HTTP_PORT}/verify/${linkID}`)
      // .setDescription("Following are the subscription plans to join "+ message.guild.name)
      .setTimestamp()
      .setColor('BLUE')
      // .setFooter("This is a footer")
      // .setAuthor("This is the author's name") //and this its profile pic
      .addField("5 Creator Tokens", "1 Month", true)
      .addField("12 Creator Tokens", "3 Months", true)
      .addField("45 Creator Tokens", "1 Year", true)
      .setImage("https://ik.imagekit.io/kaisraicttcdnimage/7d744a684fe03ebc7e8de545f97739dd_iGYyBLcyM1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1626192758870")
    // .setThumbnail("https://ik.imagekit.io/kaisraicttcdnimage/se-image-85e0e9ab23134961c88e4ecea2bff53f_NUtUPP5Oq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1626192728422")

    user.send({
      embed2
    }).catch((err) => {
      logger.error(err);
      logger.error(`Failed to send captcha to user! (Maybe they have DMs turned off?)`);
    });
  }
});

// Commands
const prefix = process.env.PREFIX;
client.on("message", async (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  // message.author.send("Hello");
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content.startsWith(`${prefix}ping`)) {
    message.channel.send('Pong!');
  }
  if (message.content.startsWith(`${prefix}verify`)) {
    message.channel.send('Please check your DMs!')
    const linkID = pool.createLink(message.author.id);

    const embed2 = new MessageEmbed()
      .setTitle(message.guild.name + " Subcription Plans")
      .setURL(`${process.env.HTTPS == 'true' ? 'https://' : 'http://'}${process.env.DOMAIN}:${process.env.HTTPS == 'true' ? '443' : process.env.HTTP_PORT}/verify/${linkID}`)
      // .setDescription("Following are the subscription plans to join "+ message.guild.name)
      .setTimestamp()
      .setColor('BLUE')
      // .setFooter("This is a footer")
      // .setAuthor("This is the author's name") //and this its profile pic
      // .addField("5 Creator Tokens", "\n_***1 Month***_\n")
      // .addField("12 Creator Tokens", "\n_***3 Months***_\n")
      // .addField("45 Creator Tokens", "\n_***1 Year***_\n")
      .addFields({
        name: '1 Month',
        value: "```5 Creator Tokens```",
        inline: true,
      }, {
        name: '3 Months',
        value: "```12 Creator Tokens```",
        inline: true,
      }, {
        name: '1 Year',
        value: "```45 Creator Tokens```",
        inline: true

      })
      .setDescription("_***Link will expire in 20 mins***_");
    // .setImage("https://ik.imagekit.io/kaisraicttcdnimage/7d744a684fe03ebc7e8de545f97739dd_iGYyBLcyM1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1626192758870")
    // .setThumbnail("https://ik.imagekit.io/kaisraicttcdnimage/se-image-85e0e9ab23134961c88e4ecea2bff53f_NUtUPP5Oq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1626192728422")

    message.author.send(embed2).then(message.author.send("Link will expire in 20 mins")).catch((err) => {
      logger.error(err);
      logger.error(`Failed to send captcha to user! (Maybe they have DMs turned off?)`);
    });
  }
});

// Events
// Send new user the subcription plan and link when they join the server
client.on('guildMemberAdd', member => {
  logger.info(`New User "${member.user.username}" has joined "${member.guild.name}"`);
  const linkID = pool.createLink(member.id);

  const embed2 = new MessageEmbed()
    .setTitle(message.guild.name + " Subcription Plans")
    .setURL(`${process.env.HTTPS == 'true' ? 'https://' : 'http://'}${process.env.DOMAIN}:${process.env.HTTPS == 'true' ? '443' : process.env.HTTP_PORT}/verify/${linkID}`)
    // .setDescription("Following are the subscription plans to join "+ message.guild.name)
    .setTimestamp()
    .setColor('BLUE')
    // .setFooter("This is a footer")
    // .setAuthor("This is the author's name") //and this its profile pic
    .addField("5 Creator Tokens", "1 Month", true)
    .addField("12 Creator Tokens", "3 Months", true)
    .addField("45 Creator Tokens", "1 Year", true)
    .setImage("https://ik.imagekit.io/kaisraicttcdnimage/7d744a684fe03ebc7e8de545f97739dd_iGYyBLcyM1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1626192758870")
  // .setThumbnail("https://ik.imagekit.io/kaisraicttcdnimage/se-image-85e0e9ab23134961c88e4ecea2bff53f_NUtUPP5Oq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1626192728422")

  member.send(embed2).catch((err) => {
    logger.error(err);
    logger.error(`Failed to send captcha to user! (Maybe they have DMs turned off?)`);
  });
});

module.exports = {
  run: main
}