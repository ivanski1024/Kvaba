'use strict';

const app = require('express')();
const port = 3000;

const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;

const winston = require('winston');
const toYAML = require('winston-console-formatter'); // makes the output more friendly

const logger = winston.createLogger();
const bot = new ViberBot({
	logger: logger,
	authToken: '4c156dd9ef27d285-18aa662d2d4e263d-f446fa1702a9ecec',
	name: "KvabaDev4",
	avatar: "http://viber.com/avatar.jpg" // It is recommended to be 720x720, and no more than 100kb.
});

// Answering on 'hi' and 'hello'
bot.onTextMessage(/^hi|hello$/i, (message, response) =>
    response.send(new TextMessage(`Hi there ${response.userProfile.name}. I am ${bot.name}`)));

app.use("/viber/webhook", bot.middleware());

bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
	// Echo's back the message to the client. Your bot logic should sit here.

	let buttons = [ 'BTC', 'ETH', 'XMR', 'IOT' ];
	response.send(message);
});
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})