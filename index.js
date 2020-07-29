const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping recebido");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.queue = new Map();
client.vote = new Map();

const config = require("./config.json");
const firebase = require("firebase");

var firebaseConfig = {
  apiKey: "AIzaSyBKu6YYtW4bXbU_6fkGQWUPK-4jn5Iwvdw",
  authDomain: "fire-b1e38.firebaseapp.com",
  databaseURL: "https://fire-b1e38.firebaseio.com",
  projectId: "fire-b1e38",
  storageBucket: "fire-b1e38.appspot.com",
  messagingSenderId: "49158407672",
  appId: "1:49158407672:web:b51396944bf01c5bc8020d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

fs.readdir("./comandos/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/${f}`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

fs.readdir("./comandos/configuração/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/configuração/${f}`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

fs.readdir("./comandos/ceo/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/ceo/${f}`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

fs.readdir("./comandos/utilitarios", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/utilitarios/${f}`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

fs.readdir("./comandos/moderação/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/moderação/${f}`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

fs.readdir("./comandos/diversão/", (err, files) => {
  if (err) console.log(err);
  
  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/diversão/${f}`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name)
    });
  });
});

client.on("ready", () => {
  console.log("Estou pronto!");

  var tabela = [
    { name: "Meu desenvolvedor é ✟ João masterYt#4685", type: "PLAYING" },
    { name: "Comandos e muitas coisas vindo do ar 🛩️", type: "WATCHING" },
    { name: "EM desenvolvimento!", type: "LISTENING" }
  ];
  setInterval(function() {
    let altstatus = tabela[Math.floor(Math.random() * tabela.length)];
    client.user.setActivity(altstatus);
  }, 6000);
});

client.on("guildMemberAdd", async member => {
  let embed = new Discord.MessageEmbed()
  .setTitle(`Boas-vindas`)
  .setDescription(`Seja bem vindo ao servidor ${member}`)
  .setColor("#11db02")
  
  let caminho1 = await db.ref(`boasvindas/${member.guild.id}`).once("value");
  caminho1 = caminho1.val().canal2
  
  if(caminho1 === null) return;
  
  client.channels.cache.get(caminho1).send(embed)
})

client.on("guildMemberRemove", async member => {
  let embed = new Discord.MessageEmbed()
  .setTitle(`Até-mais`)
  .setDescription(`${member.user.tag} acaba de sair do servidor!`)
  .setColor("#ff0000")
  
  let caminho2 = await db.ref(`atemais/${member.guild.id}`).once("value");
  caminho2 = caminho2.val().canal3
  
  if(caminho2 === null) return;
  
  client.channels.cache.get(caminho2).send(embed)
})

client.on("guildCreate", guild => {
  let canal = client.channels.cache.get("736671289594609765")
  
  let embed = new Discord.MessageEmbed()
  .setTitle(`Entrei em um servidor!`)
  .setDescription(`<:police:735591654379225141> **» Dono:** \n\`${guild.owner.user.tag}\` \n<:team:737259622301302885> **» Usuarios:** \n\`${guild.memberCount}\``)
  .setColor("#2f3136")
  canal.send(embed)
});

client.on("guildDelete", guild => {
  let canal = client.channels.cache.get("736671304199176272")
  
  let embed = new Discord.MessageEmbed()
  .setTitle(`Sai de um servidor!`)
  .setDescription(`Sai de um servidor que possue \`${guild.memberCount}\` usuarios`)
  .setColor("#2f3136")
  
  canal.send(embed)
})

client.on('guildMemberRemove', member => {
    let myGuild = client.guilds.cache.get('735226588345663580');
    let memberCountChannel = myGuild.channels.cache.get('736671474999361636') 
    let memberCount = memberCountChannel.guild.memberCount;
    memberCountChannel.setTopic(`**Atualmente estamos com: ${memberCount} usuarios!**`)
    .catch(error => console.log(error))
})
client.on('guildMemberAdd', member => {
    let myGuild = client.guilds.cache.get('735226588345663580');
    let memberCountChannel = myGuild.channels.cache.get('736671474999361636') 
    let memberCount = memberCountChannel.guild.memberCount;
    memberCountChannel.setTopic(`**Atualmente estamos com: ${memberCount} usuarios!**`)
    .catch(error => console.log(error))
})


client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  
  let mention = [`<@${client.user.id}>`, `<@!${client.user.id}>`];
  
  mention.find(mention => {
    if (message.content === mention) {
      
      const embed = new Discord.MessageEmbed()
        .setDescription(
          `Olá ${message.author}, vi que me mencionou! Utilize f.ajuda para ver meus comandos!`
        )
        .setColor("#2f3136")

      message.channel.send(embed);
    }
  });

  db.ref(`prefixos/${message.guild.id}`)
    .once("value")
    .then(async function(prefixo) {
      if (prefixo.val() == null) {
        db.ref(`prefixos/${message.guild.id}`).set({
          prefix: config.prefix
        });
        return message.channel.send(
          `Prefixo não foi setado! Por favor execute o comando novamente...`
        );
      }

      let prefix = prefixo.val().prefix;

      if (!message.content.startsWith(prefix)) return;
      let args = message.content.substring(prefix.length).split(" ");
      let cmd = args.shift().toLowerCase();

      let command =
        client.commands.get(cmd) ||
        client.commands.get(client.aliases.get(cmd));
      if (command) {
        command.run(client, message, args);
      } else {
        let embed = new Discord.MessageEmbed()
        .setColor("#2f3136")
        .setTitle(`Comando não existente!`)
        .setDescription(`Não encontrei o comando \`${message}\`! Utilize f.ajuda(help) para ver minha lista de comandos!`)
        
        message.channel.send(embed)
      }  
  });
});

client.login(process.env.TOKEN);
