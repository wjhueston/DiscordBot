const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }

    if (receivedMessage.content.startsWith("/")) {
        processCommand(receivedMessage)
    }
    
})

function processCommand(receivedMessage) {
    //let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    //let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    //let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let primaryCommand = receivedMessage.content.substr(1) //Does everything but ignores spaces now
    //let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    
    
    if (primaryCommand == "makeone") {
        helpCommand(arguments, receivedMessage)
    } else if (primaryCommand == "deadassRN") {
        deadassCommand(arguments, receivedMessage)
    } else if (primaryCommand == "ooph") {
        oophCommand(arguments, receivedMessage)
    } else if (primaryCommand == "raidhelp") {
        helpCommandActual(arguments, receivedMessage)
    } else if (primaryCommand == "apo") {
        apoCommand(arguments, receivedMessage)
    } else if (primaryCommand == "nut") {
        nutCommand(receivedMessage)
    } else if (primaryCommand == "days") {
        daysCommand(receivedMessage)
    } else if (primaryCommand == "rona") {
        ronaCommand(receivedMessage)
    } else if (primaryCommand == "apoeightball") {eightBallCommand(receivedMessage)}

    else {
        receivedMessage.channel.send("Enough about " + primaryCommand + "! What about the crucible!?", {
            files: ['https://cdn.discordapp.com/attachments/482033731956113412/694241486522417162/image0.gif']})
    }
}

function helpCommand(arguments, receivedMessage) {

    
    
    
    receivedMessage.channel.send('Fucking make one then', { files: ['https://i.imgur.com/3gcUuId.jpg'] });
     
}
function deadassCommand(arguments, receivedMessage) {
    receivedMessage.channel.send('What?', { files: ['https://www.reactiongifs.us/wp-content/uploads/2013/12/blinking_sword_in_the_stone.gif']})
}
function oophCommand(arguments, receivedMessage) {
    receivedMessage.channel.send({ files: ['https://i.imgur.com/DNKgWvd.jpg']})
}
function helpCommandActual(arguments, receivedMessage) {
    receivedMessage.channel.send('Currently, I know the following commands:\n!makeone - For people who refuse to operate the LFG system\n!deadassRN - For when your only response can be \'Huh?\'\n!ooph - OOPH\n\nComing Soon\n!stronk - <@433389451582898176> will perform for us a vine of his own imagining')

}
function apoCommand(arguments, receivedMessage) {
    receivedMessage.channel.send('shut it dummy',{ files: ['https://i.redd.it/3or4v7q40xe31.jpg']})
}
function nutCommand(receivedMessage) {
    receivedMessage.channel.send({ files: ['https://media0.giphy.com/media/BYhoMtJMQsYVy/giphy.gif?cid=790b761160f4f5dce83afb793decd700ceb64909a84834d2&rid=giphy.gif']})
}
function daysCommand(receivedMessage) {
    var time 
    receivedMessage.channel.send('It has been 0 days since <@313167185277091844> last objectified <@383867353940623361>')
}
function ronaCommand(receivedMessage) {
    receivedMessage.channel.send('if i roll around in vaseline and cover myself up enough, everything will bounce off me, including the Rona. problem solved \'merica')
}
function eightBallCommand(receivedMessage) {
    var picker = Math.floor((Math.random() * 6) + 1);
    receivedMessage.channel.send('Apo Says: ')
    if (picker == 1) { receivedMessage.channel.send('When in doubt, always go gay.') }
    else if (picker == 2) { receivedMessage.channel.send('Don\'t ask stupid questions.') }
    else if (picker == 3) { receivedMessage.channel.send('I mean, fucking probably.') }
    else if (picker == 4) { receivedMessage.channel.send({ files: ['https://www.reactiongifs.us/wp-content/uploads/2013/12/blinking_sword_in_the_stone.gif'] }) }
    else if (picker == 5) { receivedMessage.channel.send('Ask <@259903693854474241>.') }
    else if (picker == 6) { receivedMessage.channel.send('Maining Warlock will solve your problems.') }
    picker = Math.floor((Math.random() * 6) + 1);
}
function aboutCommand(receivedMessage) {
    receivedMessage.channel.send('Developed by William Hueston. Open Source and available at: https://github.com/wjhueston/DiscordBot/')
}

client.login("NjgxMDI4MTc4Njg4NzM3MzQw.XlIgJA.VmaaHl2lJFM5-J78o-y6L_mJgbk") // Replace XXXXX with your bot token