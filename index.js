const Discord = require(`discord.js`);
const client = new Discord.Client();
const config = require('./config.json');


const { TOKEN, PREFIX } = require('./util/config.json');
const kick = require("./kick.js");
const ban = require("./ban.js");
const misc = require("./misc/bot-info");
const command = require ("./command.js");
const commands = require ("./command");

bot.on("ready", () => {
  console.log("Kaguya Bot is online senpai >_<");

  //BOT STATUS
  let setatus = [
    "Saekyo",
    ${bot.guilds.cache.size} servers,
    ${bot.channels.cache.size} channels,
    ${bot.users.cache.size} users, 
    Made with 💙 by Saekyo
  ];
  setInterval(() => {
    let index = Math.floor(Math.random() * (setatus.length - 1) + 1);

    bot.user.setActivity(${db.get(status)} |  + setatus[index], {
      type: "STREAMING",
      URL: "https://www.twitch.tv/chilledcatradio"
    });
  }, 300000);

  //NOTIF BOT RESTART
  const upchannel = bot.channels.cache.get("809396265473409066");
  const upembed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.avatarURL())
    .setTitle("Bot restart Notification")
    .setDescription(
      "Maybe some glitch or my owner restarted me I am back online"
    );
  upchannel.send(upembed);
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

client.login("token") //sebenernya taro token di sini gpp
