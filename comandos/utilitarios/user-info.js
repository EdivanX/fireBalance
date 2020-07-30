const Discord = require("discord.js");
const moment = require("moment")
moment.locale("pt-BR")

const status = {
  online: "Disponivel",
  idle: "Ausente",
  dnd: "Ocupado",
  offline: "Offline"
};

exports.run = (client, message, args) => {
  const member = message.mentions.members.first() || message.member;
  
  let embed = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(`${member.user.username}`, member.user.displayAvatarURL())
    .setDescription("Informações sobre este usuarios!")
    .addField('Criou sua conta em:', `\`${moment(member.user.createdAt).format("LLL")}\``)
    .addField("Jogando",`${member.user.presence.game? `${member.user.presence.game.name}`: "Nenhum jogo detectado"}`)
    .addField("Status", `${status[member.user.presence.status]}`)
    .addField(`Cargos [${member.roles.cache.filter(r => r.id !== message.guild.id).map(a => `\`${a.name}\``).length}]`,`${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(", ") || "Não foi encontrado nenhum cargo!"}`)
    .setThumbnail(member.user.displayAvatarURL)

  message.reply(embed);
};

exports.help = {
  name: "user-info",
  aliases: ["info-user"]
};
