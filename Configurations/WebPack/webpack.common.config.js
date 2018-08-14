var webpack = require('webpack');
var path = require('path');

module.exports = {

    resolve: {
        extensions: [
            ".ts",
            ".js"
        ]
    },  

    module: {
        rules: [            
            {
                test: /\.ts?$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: { configFileName: './tsconfig.json' }
                    }
                ],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.(js)$/,
                enforce: "pre",
                use: [
                    { loader: 'source-map-loader' }
                ]
            }
        ]
    }
};