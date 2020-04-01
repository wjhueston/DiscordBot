const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
    })
})

client.login("NjgxMDI4MTc4Njg4NzM3MzQw.XoQvAg.Y4j2_MHn99vu3HZTIDbAQPvgsaE") // Replace XXXXX with your bot token