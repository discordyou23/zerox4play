const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});




client.on('ready', () => {                           
client.user.setGame(`...I Like Me...`,'https://www.twitch.tv/fofodiscord');                                                                                                                                                                                                                                                                                                                                                                                                                            
});





client.login(process.env.BOT_TOKEN);
