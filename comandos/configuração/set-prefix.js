const Discord = require("discord.js");
const firebase = require("firebase");
const db = firebase.database();

exports.run = async (client, message, args) => {
  if (!['713501355389747290'].includes(message.author.id)) {
    return message.channel.send(`Apenas meu developer emmmmmm...!`)
    }
  
  let prefixo = args[0];
  if (!prefixo) return message.reply("Escreva um prefixo!");

  db.ref(`prefixos/${message.guild.id}`).set({
    prefix: prefixo
  });
  message.channel.send(`prefixo setado com sucesso! Prefixo: ${prefixo}`);
};

exports.help = {
  name: "set-prefix",
  aliases: ["prefixo"]
};
