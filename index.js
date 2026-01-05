require('dotenv').config();
const { Client, Events, GatewayIntentBits } = require('discord.js');
const jsforce = require('jsforce');
const { token } = require('./config.json');

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

let sfConn; 

async function connectSalesforce() {
  if (sfConn) return sfConn;

  sfConn = new jsforce.Connection({
    loginUrl: process.env.SF_LOGIN_URL
  });

  await sfConn.login(
    process.env.SF_USERNAME,
    process.env.SF_PASSWORD
  );

  console.log('✅ Connected to Salesforce');
  return sfConn;
}

client.once(Events.ClientReady, () => {
  console.log('🤖 Discord bot ready');
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'createcase') {
    await interaction.deferReply();

    const description = interaction.options.getString('description');

    try {
      const conn = await connectSalesforce();

      const result = await conn.sobject('Case').create({
        Subject: 'Created from Discord',
        Description: description,
        Origin: 'Discord',
        Status: 'New'
      });

      if (!result.success) {
        throw new Error('Case creation failed');
      }

      await interaction.editReply(
        `✅ Case created successfully: **${result.id}**`
      );
    } catch (err) {
      console.error(err);
      await interaction.editReply('❌ Failed to create Case');
    }
  }
});
client.login(token);
