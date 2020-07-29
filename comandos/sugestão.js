const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let canal = client.channels.cache.get("736671602913312880")
  
  canal.send(args.join(" ")).then(msg => {
    msg.react("👍").then(r => {
    msg.react("👎").then(r => {
    })
    })
  })
  
  message.react("738065093098471455")
}

exports.help = {
  name: 'sugestão',
  aliases: []
}
