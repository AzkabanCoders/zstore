'use strict';
let ExtractTextPlugin = require('extract-text-webpack-plugin'),    
    autoprefixer = require('autoprefixer'),
    path = require('path');

module.exports = {
    context: path.join(__dirname, './src'),
    entry: {
        jsx: './index.js',
        html: './index.html',
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
        path: path.join(__dirname, './build/'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,                
                loaders: ['react-hot', 'babel'],
                query: {
                    presets: ['es2015', 'react']
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
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin("vendor", "js/vendor.bundle.js"),    
        new ExtractTextPlugin('/style/app.css', {
            allChunks: true
        }),
    ],
    devServer: {
        contentBase: './client',
        hot: true
    }
};