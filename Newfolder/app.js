
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "NjgxMDI4MTc4Njg4NzM3MzQw.XlIgJA.VmaaHl2lJFM5-J78o-y6L_mJgbk"

client.login(bot_secret_token)