const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)
const dbs =require("discord-buttons")
dbs(client)
const { MessageMenuOption, MessageMenu} = require("discord-buttons")
const prefisso = "!"
client.login(process.env.token)

client.on("ready", () => {
    console.log("BOT ONLINE")
})
client.on("messageCreate", (message) => {
    if (message.author.username == "pancio") {
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

        if(message.content == prefisso + "menu"){
            let option1 = new MessageMenuOption()
                .setLabel("zio") //nome
                .setValue("op1")
                .setDescription("Questa è la prima opzione!")
                .setDefault()
                .setEmoji("👯‍♂️")
            let option2 = new MessageMenuOption()
                .setLabel("pera") //nome
                .setValue("op2")
                .setDescription("Questa è la seconda opzione!")
                .setDefault()
                .setEmoji("🍐")
            let option3 = new MessageMenuOption()
                .setLabel("mela") //nome
                .setValue("op3")
                .setDescription("Questa è la terza opzione!")
                .setDefault()
                .setEmoji("🍏")

            let selection = MessageMenu()
                .setID("Selection")
                .setMaxValues(1)
                .setMinValues(1) 
                .setPlaceholder("zio pera selezionami!!")
                .addOption(option1)
                .addOption(option2)
                .addOption(option3)


                let mesMenu =  message.channel.send("seleziona", selection)
        }

    }

})