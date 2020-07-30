const Discord = require("discord.js"); // Puxando a livraria Discord.js   
const c = require('../../config.json'); // Puxando o conteúdo do arquivo config.json
const firebase = require("firebase");
const db = firebase.database()

exports.run = async (client, message, args) => {
  
  let refp = await db.ref(`prefixos/${message.guild.id}`).once("value");
  let prefix = refp.val().prefix;

  let erro = new Discord.MessageEmbed()
    .setTitle(`❓ Fire Erro`)
    .setColor("#2f3136")
    .setDescription(
      `<:pasta:727531432427388999> Informação deste erro: \n\`O comando de addemoji é utilizado para adicionar um emoji! Basta usar ${prefix}addemoji <nome> <link>\` \n\n<:moderation_hammer:727243867711209582> Permisão do comando: \n\`MANAGE_EMOJIS\``
    );
  
  if (!args[0]) return message.channel.send(erro); // Caso o usuário não escreva o nome do emoji, daremos a embed de explicação
  if (!args[1]) return message.channel.send(erro); // Mesma coisa com o URL
    // Caso o usuário não possua a permissão necessária, vamos aviar!
    if (!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply(erro)
try { // Utilizando a função 'try', literalmente traduzindo: Tentar
    message.guild.emojis.create(args[1], args[0]).then(emoji => { // Criar um emoji com as informações
      message.channel.send(`o emoji ${emoji} foi adicionado com sucesso!`); // Caso não haja erro, iremos criar
    });
  } catch (err) { // Agora, iremos procurar um erro
    message.channel.send(`\`\`\`js\n${err}\`\`\``) // Se acharmos, iremos avisar o que deu
  }
};

exports.help = { 
  name: 'addemoji',
    aliases: ['adicionaremoji']
}
