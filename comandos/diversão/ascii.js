const Discord = require('discord.js');
const fetch = require("node-fetch"); 
const c = require('../../config.json')
const firebase = require("firebase");
const db = firebase.database()

exports.run = async (client, message, args) => {
  
  let refp = await db.ref(`prefixos/${message.guild.id}`).once("value");
  let prefix = refp.val().prefix;

  let erro = new Discord.MessageEmbed()
    .setTitle(`❓ Fire Erro`)
    .setColor("#2f3136")
    .setDescription(
      `<:pasta:727531432427388999> Informação deste erro: \n\`O comando de ascii envia uma mensagen! Basta usar ${prefix}set-welcome <#canal>\` \n\n<:moderation_hammer:727243867711209582> Permisão do comando: \n\`MANAGE_CHANNELS\``
    );
    
    let text = encodeURIComponent(args.join(' '));
    // caso o membro nao escreva algo
    if (!text) return message.channel.send(erro);
    // caso o texto ultrapasse os limites
    const tooLong = `O texto é muito longo, tente um texto menor.`;
    // setando um link do heroku
    fetch(`http://artii.herokuapp.com/make?text=${text}`)
        .then(res => res.text()) // formando o texto
        .then(body => { // corpo
            if (body.length > 2000) return message.channel.send(tooLong);
            return message.channel.send(body, { // por fim, o ASCII
                code: "fix"
            });
        })
        .catch(error => {
            this.client.logger.error(error); // caso haja um erro, filtraremos ele e enviaremos abaixo
            return message.channel.send(text.general.error.replace(/{{err}}/g, error.message));
        });
}

exports.help = { 
    name: 'ascii',
    aliases: []
}
