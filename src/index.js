'use strict';

const app = require('express')();
const port = 3000;

const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;
const RichMediaMessage = require('viber-bot').Message.RichMedia;

let buttons = [ 'BTC', 'ETH', 'XMR', 'IOT' ];

const winston = require('winston');
const toYAML = require('winston-console-formatter'); // makes the output more friendly
const { database } = require('./database');

const logger = winston.createLogger();
const bot = new ViberBot({
	logger: logger,
	authToken: '4c156dd9ef27d285-18aa662d2d4e263d-f446fa1702a9ecec',
	name: "KvabaDev4",
	avatar: "http://viber.com/avatar.jpg" // It is recommended to be 720x720, and no more than 100kb.
});

try { const db_result = database.run(); console.log(db_result); } catch (err) { console.log(err) };


// Answering on 'hi' and 'hello'
bot.onTextMessage(/^hi|hello$/i, (message, response) =>
    response.send(new TextMessage(`Hi there ${response.userProfile.name}. I am ${bot.name}`)));

app.use("/viber/webhook", bot.middleware());

bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
	// Echo's back the message to the client. Your bot logic should sit here.

	
	console.log(message)
	alert(message);
	response.send(message);
});
if (process.env.NOW_URL || process.env.HEROKU_URL) {
    const http = require('http');
    const port = process.env.PORT || 8080;

    http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(process.env.NOW_URL || process.env.HEROKU_URL));
} else {
    logger.debug('Could not find the now.sh/Heroku environment variables.');
	return;
	
	// return ngrok.getPublicUrl().then(publicUrl => {
    //     const http = require('http');
    //     const port = process.env.PORT || 8080;

    //     http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(publicUrl));

    // }).catch(error => {
    //     console.log('Can not connect to ngrok server. Is it running?');
    //     console.error(error);
    //     process.exit(1);
    // });
}


app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})