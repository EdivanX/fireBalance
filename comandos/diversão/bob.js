const Discord = require('discord.js')
const c = require('../../config.json');
var Jimp = require("jimp")

exports.run = async (client, message, args) => {

    if (message.content.split(' ').slice(1).join(' ').length < 1) {
        message.channel.send("escreva uma msg!")
    } else {
        if (message.content.split(' ').slice(1).join(' ').length > 9) {
            message.channel.send(`Você ultrapassou o limite de 9 caracteres. Você não quer uma edição feia ne?`)
        } else {
            if (message.member.hasPermission('ATTACH_FILES')) {
                var authorMessage = message
                message.channel.send('Processando...').then(message => {
                    Jimp.read(`https://i.imgflip.com/3769du.jpg`, function (err, image) {
                        if (err) message.channel.send('ocorreu um erro ao criar a imagem.')
                        Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
                            image.print(font, 50, 100, authorMessage.content.split(' ').slice(1).join(' '), 320)
                            var aguardeMessage = message
                            image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                                const attachment = new Discord.MessageAttachment(buffer, 'laranjo.png')
                                message.channel.send(attachment).then(message => {
                                    aguardeMessage.delete()
                                })
                            })
                        })
                    })
                })
            } else {
              message.reply(`Sem permissão!`)
            }
        }
    }
}

exports.help = {
    name: "bob",
    aliases: []
}
