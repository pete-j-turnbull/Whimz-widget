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
        buildType: 'dist',
        entry: {
            loader: path.join(__dirname, '../src/loader/loader'),
            app: path.join(__dirname, '../src/index')
        },
        cache: false,
        devtool: 'sourcemap',
        plugins: [
            new webpack.optimize.DedupePlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"'
            }),
            new webpack.optimize.UglifyJsPlugin({
                output: {
                    comments: false
                }
            }),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.AggressiveMergingPlugin(),
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
