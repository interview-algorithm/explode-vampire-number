/**
 * Copyright (C) 2016 yanni4night.com
 * webpack.config.js
 *
 * changelog
 * 2016-04-12[22:34:35]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
const webpack = require('webpack');
const dateFormat = require('dateformat');

const env = process.env.NODE_ENV;

const isDev = env === 'development';

const pkg = JSON.parse(require('fs').readFileSync('package.json', 'utf-8'));

const now = new Date();
const timestamp = dateFormat(now, 'yyyy-mm-dd HH:MM:ss Z');

const startYear = 2015;
const endYear = now.getFullYear()

const config = {
    eslint: {
        configFile: '.eslintrc'
    },
    entry: {
        dist: "./src/vampire.js"
    },
    output: {
        path: __dirname + '/dist',
        filename: "explodeVampireNumber.js",
        libraryTarget: "umd"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader', 'eslint-loader'],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.BannerPlugin('/*! explodeVampireNumber.js ' + (isDev ? 'Development' : 'Release') + ' v' + pkg.version +
            ' Build ' + timestamp + ' | (C) 2015~' + endYear +
            ' yanni4night.com | github.com/yanni4night/explode-vampire-number | MIT */\n', {
                raw: true,
                entryOnly: true
            })
    ]
};

if (!isDev) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compressor: {
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
            screw_ie8: true,
            warnings: false
        }
    }));
}
module.exports = config;