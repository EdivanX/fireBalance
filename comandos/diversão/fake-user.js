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
      `<:pasta:727531432427388999> Informação deste erro: \n\`O comando de fake-user é utilizado para criar um usuario fake, para divertir seu servidor! Basta usar ${prefix}fake-user <@menção> <mensagen>\` \n\n<:moderation_hammer:727243867711209582> Permisão do comando: \n\`NENHUMA\``
    );
  
  if (!message.guild.me.hasPermission(["MANAGE_WEBHOOKS"])) return message.reply("Eu não possuo a permissão MANAGE_WEBHOOKS");
  
    message.delete()
    try {
    let user;

    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
  
    } else if(args[0]) {
        user = client.users.cache.get(args[0]);

    }
    let botmessage = args.slice(1).join(' ')

    if (args[0] == null) {return message.channel.send(erro)}


    if (args[1] == null) {return message.channel.send(erro)}
    await message.channel.createWebhook(user.username, { avatar: user.displayAvatarURL() }).then(async w => {
      await w.send(botmessage);
  

    w.delete();
    })
    } catch (err) {
      console.error(err)
    }
}

exports.help = {
  name: 'fake-user',
  aliases: []
}
