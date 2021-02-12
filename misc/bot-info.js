const { messageEmbed, MessageEmbed } = require('discord.js')
const Commando = require(`discord.js-commando`)

module.exports = class BotInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
          name: 'botinfo',
          group: 'misc',
          memberName: 'botinfo',
          description: 'Display bot information',
        })    
    }

    run = async (message) => {
        const embed = new MessageEmbed()
        .setAuthor(`innformation about the ${this.client.user.username} Bot`, 
        this.client.user.displayAvatarURL()
       ).addFields({
           name: 'cool bot blyat#7432',
           value : this.client.user.tag
       }, {
           name: 'Version',
           value: version
       }, {

       })
    }
}