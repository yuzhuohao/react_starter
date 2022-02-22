//   config/webpack.config.dev.js

const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const path = require("path");
const proxy = require('./proxy.js');

/**
 * @type {import('webpack').WebpackOptionsNormalized}
 */
const devServer = {
	port: 3000,
	host: "localhost",
	contentBase: path.join(__dirname, "../public"),
	watchContentBase: true,
	publicPath: "/",
	open: true,
	compress: true,
	historyApiFallback: true,
	hot: true,
	clientLogLevel: "error",
	watchOptions: {
		ignored: /node_modules/,
	},
	proxy: proxy,
};

const devConfig = {
	mode: "development",
	devServer: devServer,
};

module.exports = webpackMerge.merge(commonConfig, devConfig);
