// var express = require('express');
// var io = require('socket.io')(server);
// var Twit = require('twit');

// var router = express.Router();
// var client = new Twitter({
//   consumer_key: process.env.TWITTER_CONSUMER_KEY,
//   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//   access_token: process.env.TWITTER_ACCESS_TOKEN,
//   access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
// });

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   client.get('statuses/filter', { track: searchTerm, language: 'en' }, function(error, tweets, response) {
//   if (!error) {
//       res.status(200).render('index', { title: 'Express', tweets: tweets });
//     }
//     else {
//       res.status(500).json({ error: error });
//     }
//   });
// });

// module.exports = router;
