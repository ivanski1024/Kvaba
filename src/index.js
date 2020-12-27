'use strict';
const app = require('express')();
const logger = winston.createLogger();
const winston = require('winston');

const ViberBot = require('viber-bot');
const database = require('./database');

const bot = new ViberBot.Bot({
	logger: logger,
	authToken: '4c156dd9ef27d285-18aa662d2d4e263d-f446fa1702a9ecec',
	name: "KvabaDev4",
	avatar: "http://viber.com/avatar.jpg" // It is recommended to be 720x720, and no more than 100kb.
});
 
// Answering on 'hi' and 'hello'
bot.onTextMessage(/^hi|hello$/i, (message, response) => {
    response.send(new TextMessage(`Hi there ${response.userProfile.name}. I am ${bot.name}`)) 
});

bot.on(ViberBot.Events.MESSAGE_RECEIVED, (message, response) => {
    // Echo's back the message to the client. Your bot logic should sit here.	
    logger.info(message);
    
    let response = new ViberBot.Message.RichMedia
    
    response.send(message);
});


app.use("/viber/webhook", bot.middleware());
