const Discord = require(`discord.js`);
const client = new Discord.Client();
const config = require('./config.json');


const { TOKEN, PREFIX } = require('./util/config.json');
const kick = require("./kick.js");
const ban = require("./ban.js");
const misc = require("./misc/bot-info");
const command = require ("./command.js");
const commands = require ("./command");

client.on(`ready`, () => {
    console.log(`gw udh redi ngab, siap perang`);

    command(client, `hallo`, message => {
        message.channel.send(`hallo world`)
    });

    command(client, `botinfo`, message => {
        message.channel.send(`
        **Bot Name: CoolBotBlyat
        Version: 1.0.0
        Pemilik: suhbreenaa#6390
        Bahasa: Discord.JS dan NodeJS dan bahasa indonesia

        Masih beta test**
        `)
    });

    command(client, `github`, message => {
        message.channel.send(`https://github.com/fskhrijuanda`)
    });

    command(client, `owner`, message => {
        message.channel.send(`suhbreenaa#6390`)
    });

    command(client, `help`, message => {
        message.channel.send(`
nyeh coba doang ngab
kapan kapan upload ke github

**!help** - Display command menu
**!ping** - !pong
**!owner** - nama yang buat ini bot
**!github** - code bot ada di github
**!botinfo** - mengetahui tentang bot

`)
    });
    client.user.setActivity("IYAH menkrep Blyad", {
        type: "STREAMING",
        url: "https://twitch.tv/fakhri3122"
    });
});

client.login("token") //sebenernya taro token di sini gpp