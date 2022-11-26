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
                .setTitle("Il Bot del Mulo!")
                .setDescription("!mulobot (descrizione)\n!ziomulo\n!music")
                
            message.channel.send({ embeds: [mes] })
        }

        if (message.content == prefisso + "mulobot") {
            var mes = new Discord.MessageEmbed()
                .setTitle("MuloBot!")
                .setDescription("https://m.facebook.com/Lagazzettadelmulo/?_rdr")
                .setThumbnail("https://1.bp.blogspot.com/-DiRB2B8ht64/URztDZ2A9FI/AAAAAAAAO4I/FsssOa1kN-o/s200/Mulo.jpg")
            message.channel.send({ embeds: [mes] })
        }
        if (message.content == prefisso + "ziomulo") {
            //message.channel.send(`${message.author.username} ha detto: Dio Mulo`)
            message.channel.send("Noooo mi chiamo MuloBot!!")
        }

        if(message.content == prefisso + "music"){
            message.channel.send("https://open.spotify.com/track/2t5mXdvqitDSHMm8l4xLQX")
        }
        if(message.content == "ciao"){
            message.channel.send("Ciao brodi!!")
        }


    }

})
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'ping') {
		const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					]),
			);

		await interaction.reply({ content: 'Pong!', components: [row] });
	}
});