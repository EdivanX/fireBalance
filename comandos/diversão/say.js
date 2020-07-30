const Discord = require("discord.js");
const c = require('../../config.json');
const firebase = require("firebase");
const db = firebase.database()

exports.run = async (client, message, args) => {

    let refp = await db.ref(`prefixos/${message.guild.id}`).once("value");
  let prefix = refp.val().prefix;

  let erro = new Discord.MessageEmbed()
    .setTitle(`❓ Fire Erro`)
    .setColor("#2f3136")
    .setDescription(
      `<:pasta:727531432427388999> Informação deste erro: \n\`O comando de say é utilizado para fazer o bot falar! Basta usar ${prefix}say <mensagen>\` \n\n<:moderation_hammer:727243867711209582> Permisão do comando: \n\`NENHUMA\``
    );

  const fala = args.slice(0).join(' ');
  if (!fala) return message.reply(erro)
  
  message.channel.send(fala)
  message.delete()
  
}
exports.help = {
    name: 'say',
    aliases: ['falar']
}
