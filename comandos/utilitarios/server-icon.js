const Discord = require("discord.js"); // Puxando a livraria Discord.js

exports.run = (client, message, args) => {
  
  let embed = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setTitle(`${message.author.username}`)
    .setDescription(
      "**[Clique aqui para baixar](" + message.guild.iconURL() + ")**"
    )
    .setImage(message.guild.iconURL());

  message.reply(embed);
};

exports.help = {
  name: "servericon",
  aliases: ["ícone"]
};
