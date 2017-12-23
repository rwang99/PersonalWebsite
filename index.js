const express = require('express');
const router = express();

var path = require('path');

router.get('/', function (req, res) {
	res.sendFile(path.join(__dirname+'/index.html'));
});

router.listen(3000, function () {
  console.log('Website listening on port 3000!');
});

console.log('tis running');