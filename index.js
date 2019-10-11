
const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = '!';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

//client.on('guildMemberAdd', member => {
//  member.send(
//    `Welcome on the server! Please be aware that we won't tolerate troll, spam or harassment. Have fun 😀`
//  )
//})

client.on('message', message => {

    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'rps') {
        let replies = ['rock', 'paper', 'scissors'];
        let result = Math.floor((Math.random() * replies.length));

        let uReply = args[0];
        if (!uReply) return message.channel.send(`Please play with one of these responses: \`${replies.join(', ')}\``);
        if (!replies.includes(uReply)) return message.channel.send(`Only these responses are accepted: \`${replies.join(', ')}\``);

        if (replies[result] === uReply) {
            console.log(replies[result]);
            return message.channel.send('It\'s a tie! We had the same choice.');
        } else if (uReply === 'rock') {
            console.log(replies[result]);
            if (replies[result] === 'paper') return message.channel.send('I won!');
            else return message.channel.send('You won!');
        } else if (uReply === 'scissors') {
            console.log(replies[result]);
            if (replies[result] === 'rock') return message.channel.send('I won!');
            else return message.channel.send('You won!');
        } else if (uReply === 'paper') {
            console.log(replies[result]);
            if (replies[result] === 'scissors') return message.channel.send('I won!');
            else return message.channel.send('You won!');
        }
    }
})

client.on('message', msg => {
		if(msg.content === 'grandpa'){
			msg.reply('GET OFF MY LAWN, AYUMI')
		}
	
	
})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!')
  }
})

client.login('NjI1Nzc0Mzc3MzYyOTE1MzQ3.XaC6ZA.MiK8pXr6RYeMG6_hGsoxyTTIIC0')