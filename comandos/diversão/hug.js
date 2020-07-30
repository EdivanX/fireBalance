const Discord = require("discord.js");
const firebase = require("firebase");
const superagent = require("superagent")
const db = firebase.database();

exports.run = async (client, message, args) => {
  let refp = await db.ref(`prefixos/${message.guild.id}`).once("value");
  let prefix = refp.val().prefix;

  let erro = new Discord.MessageEmbed()
    .setTitle(`❓ Fire Erro`)
    .setColor("#2f3136")
    .setDescription(
      `<:pasta:727531432427388999> Informação deste erro: \n\`O comando de hug abraça um user! Basta usar ${prefix}hug <@menção>\` \n\n<:moderation_hammer:727243867711209582> Permisão do comando: \n\`NENHUMA\``
    );
  
  if (!message.mentions.users.first()) return message.channel.send(erro)
  
  const { body } = await superagent
    .get("https://nekos.life/api/v2/img/hug");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#eb4034")
    .setDescription(`**${message.author.username}** deu um abraço em **${message.mentions.users.first().username}**`)
    .setImage(body.url) 
    message.channel.send({embed})
}

exports.help = {
  name: 'hug',
  aliases: ["abraçar", "abraço"]
}
