require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

//client.on('guildMemberAdd', member => {
//  member.send(
//    `Welcome on the server! Please be aware that we won't tolerate troll, spam or harassment. Have fun 😀`
//  )
//})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!')
  }
})

client.login('NjI1Nzc0Mzc3MzYyOTE1MzQ3.XaC6ZA.MiK8pXr6RYeMG6_hGsoxyTTIIC0')