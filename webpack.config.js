'use strict';
let webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    path = require('path'),
    DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    context: path.join(__dirname, './src'),
    entry: {
        app: './client/index',
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-redux',
            'redux'
        ]
    },
    output: {
        filename: './build/js/app.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.jsx?$/,
                loader: 'react-hot',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                  presets: ['es2015','react'],
                  plugins: ['transform-runtime']
                }
            },
            {
                test: /\-font\.json$/,
                loader: ExtractTextPlugin.extract('css!sass!fontgen')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!postcss!sass')
            },
            {
                test: /\.json/,
                loader: 'json'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.json']
    },
    devtool: 'source-map',
    postcss: [ autoprefixer({ browsers: ['last 2 versions', 'ie 7-8', 'Firefox > 20'] }) ],
    plugins: [
        new DashboardPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin("vendor", "./build/js/vendor.js"),
        new ExtractTextPlugin('./build/style/app.css', {
            allChunks: true
        }),
    ],
    devServer: {
        contentBase: './',
        hot: true
    }
};