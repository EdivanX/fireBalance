const Discord = require("discord.js");
const firebase = require("firebase");
const db = firebase.database();

exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
  .setTitle(`Pong! 🏓`)
  .addField(`Meu ping está em:`, client.ws.ping)
  .setColor("#2f3136")
  
  message.channel.send(embed)
};

exports.help = {
  name: "test",
  aliases: ["a"]
};
