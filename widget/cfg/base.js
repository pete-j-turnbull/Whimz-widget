var path = require('path');
var webpack = require('webpack');

var port = 3000;
var srcPath = path.join(__dirname, '/../src');

var envConfigPath = path.join(__dirname, '../src/config/', process.env.REACT_WEBPACK_ENV);
var envConfig = require(envConfigPath);
var outputPath = path.join(__dirname, '/../dist', envConfig.outputPath);

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
            stores: srcPath + '/stores/',
            styles: srcPath + '/styles/',
            reducers: srcPath + '/reducers/'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'ENV': envConfig,
            'LOCAL': process.env.REACT_WEBPACK_LOCAL
        })
    ],
    module: {
        loaders: [{
            test: /\.s?css$/,
            loaders: [
                'style',
                'css',
                'autoprefixer?browsers=last 3 versions',
                'sass?outputStyle=expanded'
                ]
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.(ttf|eot|svg|html)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        }, {
            test: /\.(png|gif|jpe?g)$/,
            loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
        }]
    }
}
