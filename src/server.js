let server = require('express')();
const port = process.env.port ? process.env.port : 3000;

server.get('/', (request, response) => {
    response.send('Hello Trader!');
});

server.listen(port, () => {
    console.log(`Listening on ${port}`)
});

if (process.env.NOW_URL || process.env.HEROKU_URL) {
    const http = require('http');
    const port = process.env.PORT || 8080;
};

server.use()

	
// } else {
//     logger.debug('Could not find the now.sh/Heroku environment variables.');
// 	return;
// }
// 	// return ngrok.getPublicUrl().then(publicUrl => {
//     //     const http = require('http');
//     //     const port = process.env.PORT || 8080;

//     //     http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(publicUrl));

//     // }).catch(error => {
//     //     console.log('Can not connect to ngrok server. Is it running?');
//     //     console.error(error);
//     //     process.exit(1);
//     // });
// // }


