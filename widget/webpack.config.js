var path = require('path');
var args = require('minimist')(process.argv.slice(2));

var env = args.env || 'development';
var release = args.release;
var configPath = path.resolve(__dirname, 'cfg', release ? 'dist' : 'local');

process.env.REACT_WEBPACK_ENV = env;
process.env.REACT_WEBPACK_LOCAL = args.local;

module.exports = require(configPath);
