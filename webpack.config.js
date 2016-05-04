var path = require('path');
var args = require('minimist')(process.argv.slice(2));
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var env = args.env || 'development';

process.env.REACT_WEBPACK_ENV = env;
process.env.REACT_WEBPACK_LOCAL = args.local;

var port = 3000;
var srcPath = path.join(__dirname, '/src');

var envConfigPath = path.join(__dirname, '/src/config/', process.env.REACT_WEBPACK_ENV);
var envConfig = require(envConfigPath);
var outputPath = path.join(__dirname, '/dist', envConfig.outputPath);


module.exports = {
	buildType: 'dist',
	port: port,
  	debug: true,
  	entry: {
      loader: path.join(__dirname, '/src/loader/loader'),
      app: path.join(__dirname, '/src/run')
    },
  	output: {
    	path: outputPath,
    	filename: '[name].js',
    	publicPath: '/'
  	},
  	cache: false,
  	devtool: 'sourcemap',
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
      		components: srcPath + '/components/',
      		sources: srcPath + '/sources/',
      		stores: srcPath + '/stores/',
      		styles: srcPath + '/styles/',
      		images: srcPath + '/images/',
      		reducers: srcPath + '/reducers/',
      		utils: srcPath + '/utils/'
    	}
  	},
  	plugins: [
    	new HtmlWebpackPlugin({
      		filename: 'config.html',
      		template: path.join(srcPath, '/config.html'),
      		chunks: ['loader']
    	}),
    	new HtmlWebpackPlugin({
      		filename: 'index.html',
      		template: path.join(srcPath, '/index.html'),
      		chunks: ['app'],
      		minify: {
        		removeComments: true,
        		collapseWhitespace: true
      		}
    	}),
    	new webpack.DefinePlugin({
      		'ENV': envConfig,
      		'LOCAL': process.env.REACT_WEBPACK_LOCAL
    	}),
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
		preLoaders: [
      		{
        		test: /\.(js|jsx)$/,
        		include: path.join(__dirname, 'src'),
        		loader: 'eslint-loader'
      		}
    	],
    	loaders: [
    		{
    			test: /\.(js|jsx)$/,
        		loader: 'babel',
        		include: path.join(__dirname, '/../src')
    		}, {
    			test: /\.s?css$/,
      			loader: 'style!css?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!autoprefixer!sass'
    		}, {
      			test: /\.(png|jpg|gif|woff|woff2)$/,
      			loader: 'url-loader?limit=8192'
    		}, {
      			test: /\.json$/,
      			loader: 'json-loader'
    		}
    	]
  	}
};
