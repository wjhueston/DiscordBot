
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

const fs = require('fs')

fs.readFile('token.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    client.login(data)
}) 

