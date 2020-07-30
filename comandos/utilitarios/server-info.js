const Discord = require("discord.js"); // Puxando a livraria Discord.js
const moment = require("moment");
moment.locale("pt-BR")

exports.run = (client, message, args) => {
  
  let embed = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setTitle(`Informações do servidor!`)
    .setDescription(`👑 **Dono:** ${message.guild.owner.user.tag} \n👥 **Usuarios:** \n\`${message.guild.memberCount}\` \n🌎 **Região:** \n\`${message.guild.region}\` \n⚙️ **Servidor criado a:** \n\`${moment(message.guild.createdAt).format('LLL')}\``)
    .setThumbnail(message.guild.iconURL());

  message.reply(embed);
};

exports.help = {
  name: "server-info",
  aliases: ["serverinfo"]
};
