const Discord = require("discord.js");
const c = require('../../config.json');
const firebase = require("firebase");
const db = firebase.database();

exports.run = async (client, message, args) => {
    let refp = await db.ref(`prefixos/${message.guild.id}`).once("value");
  let prefix = refp.val().prefix;

  let erro = new Discord.MessageEmbed()
    .setTitle(`❓ Fire Erro`)
    .setColor("#2f3136")
    .setDescription(
      `<:pasta:727531432427388999> Informação deste erro: \n\`O comando de clear é utilizado para limpar o chat! Basta usar ${prefix}clear <numero de 1 a 100>\` \n\n<:moderation_hammer:727243867711209582> Permisão do comando: \n\`MANAGE_MESSAGES\``
    );  
  
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(erro);
    let clean = args.slice(0).join(" ");

    if (clean < 2 || clean > 100) return message.channel.send(erro)
    if (args.length === 0) return message.channel.send(erro)
    try {
        message.channel.bulkDelete(clean)
        let embed = new Discord.MessageEmbed()

        .setTitle(`Limpeza De Chat!`)
        .setDescription(`Eu acabei de limpar **${clean}** mensagens`)
        .setColor("#2f3136")
        .setFooter(`Responsável: ${message.author.username}`)

        message.channel.send(embed)
    } catch(e){
        console.log(e);
    }
}

exports.help = {
    name: 'clear',
    aliases: ['limpar', 'clean']
}
