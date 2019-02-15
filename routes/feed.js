var express = require('express');
var router = express.Router();
const podcastParser = require('podcast-parser');
const url = require('url');
/* GET home page. */
  //'http://feeds.feedburner.com/aboveandbeyond/jwqB',
  //'http://www.kyauandalbert.com/EuphonicSessions-Podcast-KyauandAlbert.xml',


router.get('/', function(req, res, next) {
	if (!req.query.url){
		req.query.url = 'http://www.kyauandalbert.com/EuphonicSessions-Podcast-KyauandAlbert.xml';
		//return res.json({});
	}
	
	feedurl = decodeURIComponent(req.query.url);
	
	if (!feedurl.match(/\:\/\//)){
		feedurl = "http://" + feedurl;
	}
	feedurl = url.parse(feedurl);
	feedurl = url.format(feedurl);
	podcastParser.execute(
		feedurl,
		{
			'dateAs': 'date'
			,'timeAs': 'string'
		},
		function (err, result) {
			if (err) {
				console.log(err);
				return res.json({});;
			}
			//c onsole.log(result);
			return res.json(result);

		}
	);
});

module.exports = router;
