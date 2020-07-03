const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const SOURCE = './source';

const packageFile = require('./package.json');
const manifestFile = require(`${SOURCE}/manifest.json`);

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
    entry: {
        bundle: [`${SOURCE}/index.js`],
        sw: [`${SOURCE}/sw.js`],
    },
    resolve: {
        alias: {
            svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.js', '.svelte'],
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
                        hotReload: true,
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: prod,
                        },
                    },
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
            themeColor: manifestFile.theme_color,
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
            {from: `${SOURCE}/icons`, to: `icons`},
        ]),
    ],
    devtool: prod ? false: 'source-map'
};