const Discord = require("discord.js");

const client = new Discord.Client()

exports.run = async (client, message, args) => {
    if (!['713501355389747290'].includes(message.author.id)) {
    return message.channel.send(`Apenas meu developer emmmmmm...!`)
    }
    const code = args.slice(0).join(" ")
    if (!code) return message.reply(`Presciso saber algum codigo!`)
    
        try {
        let ev = require('util').inspect(eval(code));
        if (ev.length > 1950) {
            ev = ev.substr(0, 1950);
        }
          let embed = new Discord.MessageEmbed()
          .setDescription(`:inbox_tray: **Entrada do codigo:**\n\`\`\`js\n${code}\`\`\`\n:outbox_tray: **Saida(resposta) do comando:**\n\`\`\`js\n${ev}\`\`\``)
          .setColor("#2f3136")
        message.channel.send(embed)
        } catch(err) {
          let errorrr = new Discord.MessageEmbed()
          .setDescription(`**Erro!**\n\`\`\`\n${err}\`\`\``)
          .setColor("#2f3136")
            message.channel.send(errorrr)
        }
  }
 exports.help = {
      name: "eval",
     aliases: []
 }
