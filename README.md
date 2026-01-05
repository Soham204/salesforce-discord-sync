# Salesforce to Discord Integration

This project integrates **Salesforce** and **Discord** using **Node.js** as middleware. It allows users to create cases in Salesforce directly from Discord via a Slash Command. Additionally, the bot will send updates to Discord when the status of a Salesforce case is updated to `Closed`.

## Features
- **Create Salesforce Case from Discord**: Use the `/createcase` Slash Command in Discord to create a new case in Salesforce with a custom description.
- **Case Status Updates**: When the status of a case changes to `Closed` in Salesforce, the bot sends an update to the Discord channel.

## Prerequisites

To get started, you’ll need:

- **Node.js** (latest version recommended)
- **Salesforce Developer Account**
- **Discord Bot Account** (with permission to register Slash Commands)

### Salesforce Setup
- **Salesforce Credentials**: You need to provide your Salesforce username, password, and login URL for API access.
- **Case Object**: The bot will create cases in Salesforce with a `Subject`, `Description`, and `Status`. Modify the case creation fields based on your requirements.

### Discord Setup
- **Create a Discord Bot**: Register your bot through the [Discord Developer Portal](https://discord.com/developers/applications).
- **Slash Commands**: The bot will use Discord's application commands to enable users to interact with it.

## Installation

### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/salesforce-discord-integration.git
cd salesforce-discord-integration
