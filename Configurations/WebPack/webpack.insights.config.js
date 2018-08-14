var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var path = require('path');
var commonConfig = require('./webpack.common.config');

module.exports = webpackMerge(commonConfig, {
    entry: {
        "insights": ["./Source/insights.ts"]
    },

    output: {
        path: path.resolve(process.cwd()),
        filename: "mtno.[name].js",
        library: ["mtno", "[name]"],
        sourceMapFilename: "[name].js.map",
        chunkFilename: '[id].[name].chunk.js',
        pathinfo: true
    },

    plugins: [
        new webpack.DllPlugin({
            path: 'mtno-[name]-manifest.json',
            name: "mtno.[name]"
        })
    ]
});

