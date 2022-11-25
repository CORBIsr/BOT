const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)
const prefisso = "!"

client.login(process.env.token)

client.on("ready", () => {
    console.log("BOT ONLINE")
})

client.on("messageCreate", (message) => {

    if (message.author.username == process.env.s4) {
        message.channel.send("Il Bot è OFLINE :(")
    } else {


        if (message.content == prefisso + "help") {
            var mes = new Discord.MessageEmbed()
                .setTitle("Il Bot del Dio Mulo!")
                .setDescription("!diomulo (descrizione)\n!ziomulo (Rica bestemia)")
            message.channel.send({ embeds: [mes] })
        }

        if (message.content == prefisso + "diomulo") {
            var mes = new Discord.MessageEmbed()
                .setTitle("Dio Mulo!")
                .setDescription("https://m.facebook.com/Lagazzettadelmulo/?_rdr")
            message.channel.send({ embeds: [mes] })
        }
        if (message.content == prefisso + "ziomulo") {
            message.channel.send(`${message.author.username} ha detto: Dio Mulo`)
        }

        if(message.content == prefisso + "music"){
            message.channel.send("https://open.spotify.com/track/2t5mXdvqitDSHMm8l4xLQX")
        }

    }

})