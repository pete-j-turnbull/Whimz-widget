var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var open = require('open');
var chalk = require('chalk');

new WebpackDevServer(webpack(config), config.devServer)
.listen(config.port, 'localhost', function (err) {
	if (err) {
    	console.log(err);
  	}
  	console.log(chalk.bgCyan.bold.white('\n\n\tStarting Whims.co widget [ http://localhost:' + config.port + ' ]\n'));
  	open('http://localhost:' + config.port + '/config.html');
});