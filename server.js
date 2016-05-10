var open = require('open');
var chalk = require('chalk');
var express = require('express');
var path = require('path');

var app = express();
var port = 3000;
var publicPath = path.resolve(__dirname, 'dist');

// We point to our static assets
app.use(express.static(publicPath));

// And run the server
app.listen(port, function () {
  console.log('Server running on port ' + port);
});
