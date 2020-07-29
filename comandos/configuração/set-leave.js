const Discord = require("discord.js");
const firebase = require("firebase");
const db = firebase.database();

exports.run = async (client, message, args) => {
  
  let refp = await db.ref(`prefixos/${message.guild.id}`).once("value");
  let prefix = refp.val().prefix;

  let erro = new Discord.MessageEmbed()
    .setTitle(`❓ Fire Erro`)
    .setColor("#2f3136")
    .setDescription(
      `<:pasta:727531432427388999> Informação deste erro: \n\`O comando de set-leave seta um canal aonde pode enviar mensagens de quando o user sair do servidor! Basta usar ${prefix}set-leave <#canal>\` \n\n<:moderation_hammer:727243867711209582> Permisão do comando: \n\`MANAGE_CHANNELS\``
    );
  
  let channel = message.mentions.channels.first()


  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(erro);
  if (!channel) return message.reply(erro);

  db.ref(`atemais/${message.guild.id}`).set({
    canal3: channel.id
  });
  message.channel.send(`Canal setado com sucesso! Canal: ${channel}`);
};

exports.help = {
  name: "set-leave",
  aliases: ["set-atémais"]
};
