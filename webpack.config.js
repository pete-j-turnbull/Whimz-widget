var path = require('path');
var webpack = require('webpack');

var port = 3000;
var srcPath = path.join(__dirname, '/src');
var outputPath = path.join(__dirname, '/dist');

module.exports = {
    devtool: 'eval',
    debug: true,
    port: port,
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:' + port,
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
            './src/index'
            ],
        loader: './src/loader/loader'
    },
    output: {
        path: outputPath,
        filename: '[name].js',
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['', '.js']
    },
    resolveLoader: {
        'fallback': path.join(__dirname, 'node_modules')
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            include: srcPath
        }, {
            test: /\.s?css$/,
            loader: 'style!css!sass',
            include: srcPath
        }]
  }
}
