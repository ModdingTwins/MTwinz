const Discord = require("discord.js")
const bot = new Discord.Client()
bot.on("ready", () => {
console.log(`${bot.user.username}` + "is online")

bot.user.setActivity("TwinFactions.tk | -help", {type: "STREAMING"})
});
bot.login(process.env.TOKEN)

bot.on("message", (message) => {
if(message.content === "-ip") {
message.channel.send("twinfactions.tk : 19132")
}
});

bot.on("message", (message) => {
if(message.content === "-youtube") {
message.channel.send("YouTube.com/c/ModdingTwinz")
}
});

bot.on("message", (message) => {
if(message.content === "-help") {
message.author.send("Commands:\n -ip\n -youtube")
}
}); 

bot.on("message", (message) => {
if(message.content === "-help") {
console.log("Log")
message.channel.send(`${message.author.username}` + ", I Have Sent You The Commands 📪")
message.author.send("Commands:\n -ip (TwinFactions)\n -youtube (ModdingTwinz)\n I was created by ``ModdingTwinz#4560`` I am in beta 1.0")
}
});
 
