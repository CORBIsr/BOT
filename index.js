const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login(process.env.token)

client.on("ready", () => {
    console.log("BOT ONLINE")
})
client.on("messageCreate", (message) => {
    if (message.author.username == "pancio") {
        message.channel.send("Il Bot è OFLINE :(")
    } else {
        if (message.content == "!help") {
            var mes = new Discord.MessageEmbed()
                .setTitle("Il Bot del Dio Mulo!")
                .setDescription("!diomulo (descrizione)\n!ziomulo (Rica bestemia)")
            message.channel.send({ embeds: [mes] })
        }

        if (message.content == "!diomulo") {
            var mes = new Discord.MessageEmbed()
                .setTitle("Dio Mulo!")
                .setDescription("https://m.facebook.com/Lagazzettadelmulo/?_rdr")
            message.channel.send({ embeds: [mes] })
        }
        if (message.content == "!ziomulo") {
            message.channel.send(`${message.author.username} ha detto: Dio Mulo`)
        }
    }

})