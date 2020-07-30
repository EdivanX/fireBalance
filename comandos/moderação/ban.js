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
      `<:pasta:727531432427388999> Informação deste erro: \n\`O comando de ban é utilizado para banir usuarios fazendo eles não entrar mais em seu servidor! Basta usar ${prefix}ban <@menção> <motivo>\` \n\n<:moderation_hammer:727243867711209582> Permisão do comando: \n\`BAN_MEMBERS\``
    );

  var membro =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
  if (!membro) return message.channel.send(erro);
  if (membro === message.member)
    return message.reply(
      `<:close:735574187204280360> | Eu não posso autobanir você mesmo!`
    );

  let motivo = args.slice(1).join(" ");
  if (!motivo) return message.channel.send(erro);

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(erro);

  let banido = new Discord.MessageEmbed()
    .setTitle(`<:ban:735582739545456731> Banimento!`)
    .setColor("#2f3136")
    .setDescription(
      `<:user:735591150974664714> Usuario: \n\`${membro}\` \n\n<:reason:735591386279182387> Motivo: \n\`${motivo}\` \n<:police:735591654379225141> Responsavel: \n\`${message.author.username}\``
    );

  let caminho1 = await db.ref(`punicoes/${message.guild.id}`).once("value");
  caminho1 = caminho1.val().canal1
  
  if(caminho1 === null) {
    message.reply(`Nenhum canal foi setado! Use f.set-punição!`)
  }
  
  client.channels.cache.get(caminho1).send(banido)

  membro.ban();
};

exports.help = {
  name: "ban",
  aliases: ["banir", "banimento"]
};
