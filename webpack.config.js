var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var port = 3000;
var srcPath = path.join(__dirname, '/src');
var outputPath = path.join(__dirname, '/dist');

module.exports = {
    port: port,
    debug: true,
    output: {
        path: outputPath,
        filename: '[name].js',
        publicPath: '/'
    },
    devServer: {
        contentBase: './src/',
        historyApiFallback: true,
        hot: true,
        port: port,
        noInfo: false,
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            actions: srcPath + '/actions/',
            components: srcPath + '/components',
            stores: srcPath + '/stores',
            reducers: srcPath + 'reducers'
        }
    },
    entry: {
        app: [
            './src/run'
        ],
        loader: './src/loader/loader'
    },
    devtool: 'cheap-module-eval-source-map',
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
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel-loader',
                include: path.join(__dirname, '/src')
            },
            {
                test: /\.s?css$/,
                loader: 'style!css?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!autoprefixer!sass'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}
