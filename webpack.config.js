const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
		mode: "development",
		devtool: "inline-source-map",
		entry: "./src/index.js",
		plugins: [
				new HtmlWebpackPlugin({
						title: "Mapa de la Corrupción"
				})
		],
		devServer: {},
		module: {
				rules: [
						{
								test: /\.css$/,
								use: [
										'style-loader',
										'css-loader'
								]
						}
				]
		}
};
