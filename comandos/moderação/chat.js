const Discord = require('discord.js');
const firebase = require("firebase");
const db = firebase.database()
 
exports.run = async (client, message, args) => {
  
  let refp = await db.ref(`prefixos/${message.guild.id}`).once("value");
  let prefix = refp.val().prefix;

  let erro = new Discord.MessageEmbed()
    .setTitle(`❓ Fire Erro`)
    .setColor("#2f3136")
    .setDescription(
      `<:pasta:727531432427388999> Informação deste erro: \n\`O comando de chat é utilizado para fechar um canal ou abrilo! Basta usar ${prefix}chat <on/off>\` \n\n<:moderation_hammer:727243867711209582> Permisão do comando: \n\`MANAGE_CHANNELS\``
    );
 
   if (!message.member.hasPermission(["MANAGE_CHANNELS"])) return message.reply(erro);
 
   if (!message.guild.me.hasPermission(["MANAGE_CHANNELS"])) return message.reply("Eu não possuo a permissão MANAGE_CHANNELS");
 
   if (!args[0]) return message.reply("use !chat <on/off>");
 
   const everyone = message.guild.roles.cache.find(e => e.name === "@everyone");
 
   if (args[0] === "off") {
       message.channel.overwritePermissions([
           {
               id: everyone.id,
               deny: ["SEND_MESSAGES"]
           }
       ])
 
       message.reply("O canal foi bloqueado com sucesso!");
 
   }
 
   if (args[0] === "on") {
    message.channel.overwritePermissions([
        {
            id: everyone.id,
            allow: ["SEND_MESSAGES"]
        }
    ])
 
    message.reply("O canal foi desbloqueado com sucesso!");
 
}
 
}
 
exports.help = {
    name: "chat",
    aliases: []
}
