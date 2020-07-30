const Discord = require("discord.js");
const firebase = require("firebase");
const db = firebase.database();

exports.run = async (client, message, args) => {
    let refp = await db.ref(`prefixos/${message.guild.id}`).once("value");
    let prefix = refp.val().prefix;
  
  message.channel.send(`<:send:738065093098471455> **»** Enviei na sua DM!`)

    let embed = new Discord.MessageEmbed()
    .setTitle(`Central De Comandos!`)
    .setDescription(`Clique em um dos emojis! Cada um dos comandos estara armazenado lá! \n\n\n<:one:737835842935980073>  Moderação \n<:two:737835857712644116> Diversão \n<:three:737835868789669929> Configuração \n<:four:737835878000492685> Utilidades`)
    .setColor("#0ffc03")
    .setThumbnail("https://cdn.discordapp.com/attachments/735226588970352772/735452404081754223/images.jpg")
    .setColor("#2f3136")
    .setFooter(`Pagina 1 de 5`)

    message.author.send({ embed }).then(msg => {
        msg.react("737835842935980073").then(r => {
            msg.react("737835857712644116").then(r => {
                msg.react("737835868789669929").then(r => {
                    msg.react("737835878000492685").then(r => {
                            msg.react("738009755108507668").then(r => {
                        });
                    });
                });
            });
        });

        // filtros
        let filter1 = (r, u) => r.emoji.id === "737835842935980073" && u.id === message.author.id;
        let filter2 = (r, u) => r.emoji.id === "737835857712644116" && u.id === message.author.id;
        let filter3 = (r, u) => r.emoji.id === "737835868789669929" && u.id === message.author.id;
        let filter4 = (r, u) => r.emoji.id === "737835878000492685" && u.id === message.author.id;
        let filter6 = (r, u) => r.emoji.id === "738009755108507668" && u.id === message.author.id;
 
        //coletores
        let coletor1 = msg.createReactionCollector(filter1);
        let coletor2 = msg.createReactionCollector(filter2);
        let coletor3 = msg.createReactionCollector(filter3);
        let coletor4 = msg.createReactionCollector(filter4);
        let coletor6 = msg.createReactionCollector(filter6);

        //edits
        coletor1.on("collect", c => {
            let embed = new Discord.MessageEmbed()
            .setTitle(`Moderação`)
            .setColor("#2f3136")
            .addField(`${prefix}ban <@user> <motivo>`, `Bane um usuario de um serivodr!`)
            .addField(`${prefix}unban <@user> <motivo>`, `Tira o banimento do usuario!`)
            .addField(`${prefix}kick <@user> <motivo>`, `Expulsa o user do servidor!`)
            .addField(`${prefix}warn <@user> <motivo>`, `Avisa um usuario de um servidor!`)
            .addField(`${prefix}addemoji <nome> <link>`, `Adiciona um emoji que vc queira em um servidor!`)
            .addField(`${prefix}canal <on ou off>`, `Fecha ou abre o canal!`)
            .addField(`${prefix}clear <1 ao 100>`, `Limpa as mensagens do chat!`)
            .setFooter(`Pagina 1 de 5`);
            msg.edit(embed);
        });

        coletor2.on("collect", c => {
            let embed = new Discord.MessageEmbed()
            .setTitle(`Diversão`)
            .setColor("#2f3136")
            .addField(`${prefix}meme`, `Veja imagens de memes aleatorias!`)
            .addField(`${prefix}conquista <mensagen>`, `Faça uma conquista do minecraft!`)
            .addField(`${prefix}hug <@user>`, `Abraçe um usuario!`)
            .addField(`${prefix}kiss <@user>`, `Beije um usuario!`)
            .addField(`${prefix}ascii  <mensagen>`, `Crie imagens com linhas!`)
            .addField(`${prefix}avatar <@menção>`,`Pegue o avatar de um user" (Se quiser fique com ele '-')`)
            .addField(`${prefix}fake-user <@menção> <mensagen>`, `Faça um usuario fake!`)
            .addField(`${prefix}say <mensagen>`, `Faça o bot falar!`)
            .setFooter(`Pagina 2 de 5`)
            msg.edit(embed);
        });

        coletor3.on("collect", c => {
            let embed = new Discord.MessageEmbed()
            .setTitle(`Configuração!`)
            .setColor("#2f3136")
            .addField(`${prefix}set-welcome <#canal>`, `Seta aonde enviaria uma msg de boas-vindas!`)
            .addField(`${prefix}set-leave <#canal>`, `Seta aonde enviaria uma msg de até-mais`)
            .addField(`${prefix}set-punishiment <#canal>`, `Seta aonde enviara quando um user sera punido!`)
            .addField(`${prefix}set-prefix <prefixo>`, `Seta um prefixo!`)
            .setFooter(`Pagina 3 de 5`)
            msg.edit(embed);
        });

        coletor4.on("collect", c => {
            let embed = new Discord.MessageEmbed()
            .setTitle(`Utilidades`)
            .addField(`${prefix}server-icon`, `Veja a imagem do servidor!`)
            .addField(`${prefix}server-info`, `Veja as informações do servidor!`)
            .addField(`${prefix}user-info <@menção>`, `Veja as informações de um usuarios!`)
            .setColor("#2f3136")
            .setFooter(`Pagina 4 de 5`)
            msg.edit(embed);
        });

        coletor6.on("collect", c => {
            let embed = new Discord.MessageEmbed()
    .setTitle(`Central De Comandos!`)
    .setDescription(`Clique em um dos emojis! Cada um dos comandos estara armazenado lá! \n\n\n<:one:737835842935980073>  Moderação \n<:two:737835857712644116> Diversão \n<:three:737835868789669929> Configuração \n<:four:737835878000492685> Utilidades \n<:five:737835887270035496> Economia`)    .setColor("#0ffc03")
    .setThumbnail("https://cdn.discordapp.com/attachments/735226588970352772/735452404081754223/images.jpg")
    .setColor("#2f3136")
    .setFooter(`Pagina 1 de 5`)
            msg.edit(embed);
        });
    });
  
};

exports.help = {
    name: "ajuda",
    aliases: ["help", "comandos"]
};
