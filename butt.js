var Discord = require('discord.io');
var config = require("./config");

var bot = new Discord({
    autorun: true,
    email: config.email,
    password: config.password,
    username: config.username
});

function rand(length)
{
    return Math.floor(Math.random() * length);
}

function makeFart()
{
    var fart = "", maxPoo = 7;
    for (var i = 0; i < 1 + rand(maxPoo); i++) { fart += "P"; }
    for (var i = 0; i < 1 + rand(maxPoo); i++) { fart += "F"; }
    for (var i = 0; i < 1 + rand(maxPoo); i++) { fart += "T"; }
    for (var i = 0; i < 1 + rand(maxPoo); i++) { fart += "H"; }
    return fart;
}

// Connector
bot.on('ready', function() {
    console.log("it's butt time");
    bot.on('disconnected', function() {
        setTimeout(function() {
            bot.connect();
        }, 5000);
    });
});

// Listener
bot.on('message', function (userName, userID, channelID, message, rawEvent) {
    if (userID != bot.id) {
    
        // Makes itself known
        if (message.match(/\b(((bu(tt|m)|arse|poop?|shit)(hole)?|buttock|fart|crap|parp)s?|(ass|gas)(es)?|assholes?)\b/i)) {
            bot.sendMessage({
                to: channelID,
                message: "<@" + userID + ">: *" + makeFart() + "*"
            });
            console.log("i farted at " + userName);
        }
        
        // Cloud to butt plus
        if (message.match(/cloud/i)) {
            var response = message.replace(/the cloud/gi, "my butt");
            response = response.replace(/Cloud/g, "Butt");
            response = response.replace(/cloud/gi, "butt");
            bot.sendMessage({
                to: channelID,
                message: "<@" + userID + "> means to say... *\"" + response + "\"*"
            });
            console.log("i corrected " + userName);
        }
    }
});