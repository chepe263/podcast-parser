var express = require('express');
var router = express.Router();
/* GET home page. */
  //'http://feeds.feedburner.com/aboveandbeyond/jwqB',
  //'http://www.kyauandalbert.com/EuphonicSessions-Podcast-KyauandAlbert.xml',
router.get('/', function(req, res, next) {
	console.log(req.query);
  res.render('index', { title: 'Expressjsss' });
});


module.exports = router;
