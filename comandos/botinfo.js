const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
  .setTitle(`Informações sobre min!`)
  .setDescription(`Algumas informações`, true)
  .addField(`Livraria:`, `Discord.js`, true)
  .setColor("#2f3136")
  .addField(`Linguagem:`, `Javascript`, true)
  .addField(`Aniversario:`, `12/06/2020`, true)
  .addField(`Servidores:`, `${client.guilds.cache.size}`, true)
  .addField(`Usuarios:`, `${client.users.cache.size}`, true)
  .addField(`Developers:`, `✟ João masterYt#4685`, true)
  .addField(`Host:`, `Glitch + Betteruptime!`)
  .addField(`Database`, `Quick.db e Firebase`)
  .addField(`LINKS:`, `[Suporte](https://discord.gg/x2MxRxR) \n[Weebsite](http://firebace.glitch.me/)`)
  
  message.channel.send(embed)
}

exports.help = {
  name: 'botinfo',
  aliases: ["informações", "info"]
}
