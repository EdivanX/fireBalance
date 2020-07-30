const Discord = require("discord.js");
const c = require('../../config.json');
const firebase = require("firebase");
const db = firebase.database()

exports.run = async (client, message, args) => {
  var piadakk = [
    "Como se chama um pedido de desculpas escrito em pontos e traços? ||Código re-Morse||",
    "Que raça de cachorro salta mais alto que um prédio? ||Qualquer uma, porque prédio não pula.|||",
    "Como se chama o cachorro do mágico? ||Labracadabrador.||",
    "O que o tubarão disse quando comeu o peixe-palhaço? ||Que gosto engraçado!||"
  ]
  
  let kkkkkkk = piadakk[Math.floor(Math.random() * piadakk.length)]
  
  let embed = new Discord.MessageEmbed()
  .setTitle(`Piada!`)
  .setDescription(`${kkkkkkk}`)
  
  message.channel.send(embed)
}
exports.help = {
    name: 'piada',
    aliases: ['falar']
}
