var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');

var baseConfig = require('./base');
var mergeArrays = function (a, b) {
    if (_.isArray(a)) {
        return a.concat(b);
    }
};

var config = _.merge({},
    baseConfig, {
        buildType: 'local',
        entry: {
            app: [
                'webpack-dev-server/client?http://127.0.0.1:' + baseConfig.port,
                'webpack/hot/only-dev-server',
                './src/index'
            ],
           loader: './src/loader/loader'
        },
        cache: true,
        devtool: 'cheap-module-eval-source-map',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ],
        module: {
            loaders: [{
                test: /\.(js|jsx)$/,
                loader: 'babel',
                include: path.join(__dirname, '/../src')
            }]
        }
    }, mergeArrays);

module.exports = config;
