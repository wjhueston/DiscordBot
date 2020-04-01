const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
    })
})
fs.readFile('token.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    client.login(data)
}) 

