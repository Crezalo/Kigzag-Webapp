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
const dis_router = require('../routes/discord_routes');
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
  channel.send('hello I am test bot 1');
});

// Interactions
client.on('interactionCreate', async (interaction) => {
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
    const {
      linkID
    } = await dis_router.createLink(user.id, interaction.guild.id);
    const planDetails = await dis_router.getPlanDetailsFromLinkId(linkID);
    if (planDetails != 'Link Not Available') {

      const embed2 = new MessageEmbed()
        .setTitle(message.guild.name + " Subcription Plans")
        .setURL(process.env.DISCORD_PLANS_API_ENDPOINT + linkID)
        .setTimestamp()
        .setColor('BLUE')
        .addFields({
          name: '1 Month',
          value: planDetails['1month'] + " " + planDetails['symbol'],
          inline: true,
        }, {
          name: '3 Months',
          value: planDetails['3months'] + " " + planDetails['symbol'],
          inline: true,
        }, {
          name: '1 Year',
          value: planDetails['1year'] + " " + planDetails['symbol'],
          inline: true
        })
        .setDescription("_***Link will expire in 30 mins***_");

      message.author.send(embed2).then(message.author.send("Link will expire in 30 mins")).catch((err) => {
        logger.error(err);
        logger.error(`Failed to send captcha to user! (Maybe they have DMs turned off?)`);
      });
    } else {
      logger.error(`Invalid Link Generated, planDetails failed, should not reach here!`);
    }
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
    const {
      linkID
    } = await dis_router.createLink(message.author.id, message.guild.id);
    const planDetails = await dis_router.getPlanDetailsFromLinkId(linkID);
    if (planDetails != 'Link Not Available') {

      const embed2 = new MessageEmbed()
        .setTitle(message.guild.name + " Subcription Plans")
        .setURL(process.env.DISCORD_PLANS_API_ENDPOINT + linkID)
        .setTimestamp()
        .setColor('BLUE')
        .addFields({
          name: '1 Month',
          value: planDetails['1month'] + " " + planDetails['symbol'],
          inline: true,
        }, {
          name: '3 Months',
          value: planDetails['3months'] + " " + planDetails['symbol'],
          inline: true,
        }, {
          name: '1 Year',
          value: planDetails['1year'] + " " + planDetails['symbol'],
          inline: true
        })
        .setDescription("_***Link will expire in 30 mins***_");

      message.author.send(embed2).then(message.author.send("Link will expire in 30 mins")).catch((err) => {
        logger.error(err);
        logger.error(`Failed to send captcha to user! (Maybe they have DMs turned off?)`);
      });
    } else {
      logger.error(`Invalid Link Generated, planDetails failed, should not reach here!`);
    }
  }
});

// Events
// Send new user the subcription plan and link when they join the server
client.on('guildMemberAdd', async (member) => {
  logger.info(`New User "${member.user.username}" has joined "${member.guild.name}"`);
  const {
    linkID
  } = await dis_router.createLink(member.id, member.guild.id);
  const planDetails = await dis_router.getPlanDetailsFromLinkId(linkID);
  if (planDetails != 'Link Not Available') {
    const embed2 = new MessageEmbed()
      .setTitle(message.guild.name + " Subcription Plans")
      .setURL(process.env.DISCORD_PLANS_API_ENDPOINT + linkID)
      .setTimestamp()
      .setColor('BLUE')
      .addFields({
        name: '1 Month',
        value: planDetails['1month'] + " " + planDetails['symbol'],
        inline: true,
      }, {
        name: '3 Months',
        value: planDetails['3months'] + " " + planDetails['symbol'],
        inline: true,
      }, {
        name: '1 Year',
        value: planDetails['1year'] + " " + planDetails['symbol'],
        inline: true
      })
      .setDescription("_***Link will expire in 30 mins***_");

    message.author.send(embed2).then(message.author.send("Link will expire in 30 mins")).catch((err) => {
      logger.error(err);
      logger.error(`Failed to send captcha to user! (Maybe they have DMs turned off?)`);
    });
  } else {
    logger.error(`Invalid Link Generated, planDetails failed, should not reach here!`);
  }
});

module.exports = {
  run: main
}