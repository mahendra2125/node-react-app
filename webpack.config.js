const webpack = require('webpack');
const path = require('path');

const config = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: 'build/bundle.js',
        sourceMapFilename: 'build/bundle.map'
    },
    devtool: '#source-map',
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};

module.exports = config;
