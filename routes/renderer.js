var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	return res.send("Hello opeNode!");
});



module.exports = router;
