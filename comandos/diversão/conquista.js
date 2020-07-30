const Discord = require('discord.js')
const c = require('../../config.json');
const snekfetch = require('snekfetch');
const firebase = require("firebase");
const db = firebase.database();

exports.run = async (client, message, args) => {
  let refp = await db.ref(`prefixos/${message.guild.id}`).once("value");
  let prefix = refp.val().prefix;
  
   let erro = new Discord.MessageEmbed()
    .setTitle(`❓ Fire Erro`)
    .setColor("#2f3136")
    .setDescription(
      `<:pasta:727531432427388999> Informação deste erro: \n\`O comando de conquista é utilizado para fazer yna xibquista de minecraft! Basta usar ${prefix}conquista <mensagen> (o limite de caracteres são: 22)\` \n\n<:moderation_hammer:727243867711209582> Permisão do comando: \n\`NENHUMA\``
    );  


  let [title, contents] = args.join(" ").split("|");
  if (!contents) [title, contents] = ["Conquista desbloqueada!", title];
  let rnd = Math.floor((Math.random() * 39) + 1);

  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;

  if (!args.join(" ")) return message.reply(erro)
  if (title.length > 24 || contents.length > 22) return message.channel.send(erro);
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url).then(r => message.channel.send({files:[{attachment: r.body}]}));
};

exports.help = {
  name: 'achievement',
  aliases: ['conquista']
};
