var path = require('path');
var webpack = require('webpack');

var port = 3000;
var srcPath = path.join(__dirname, '/src');
var outputPath = path.join(__dirname, '/dist');

module.exports = {
    devtool: 'cheap-module-source-map',
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
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['', '.js']
    },
    resolveLoader: {
        'fallback': path.join(__dirname, 'node_modules')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'source-map'
            }
        ],
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            include: srcPath
        }, {
            test: /\.s?css$/,
            include: srcPath,
            loaders: [
                'style',
                'css',
                'autoprefixer?browsers=last 3 versions',
                'sass?outputStyle=expanded'
                ]
        },{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
        { test: /\.(ttf|eot|svg|html)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
        {
            test: /\.(png|gif|jpe?g)$/,
            loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
        }
        ]
    }
}
