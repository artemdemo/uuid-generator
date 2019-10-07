const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const packageFile = require('./package.json');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

const SOURCE = './source';

module.exports = {
	entry: {
		bundle: [`${SOURCE}/index.js`]
	},
	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte')
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	output: {
		path: __dirname + '/public',
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						hotReload: true
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader'
				]
			}
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),

		new HtmlWebpackPlugin({
			template: `${SOURCE}/index.ejs`,
			filename: './index.html',
			appVersion: packageFile.version,
		}),

		new CleanWebpackPlugin({
			verbose: true,
			dry: false,
			cleanOnceBeforeBuildPatterns: [
				'**/*',
				'!.gitignore',
			],
		}),

		new CopyPlugin([
			`${SOURCE}/manifest.json`,
		]),
	],
	devtool: prod ? false: 'source-map'
};